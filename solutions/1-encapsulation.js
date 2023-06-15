export const getMutualFriends = (user1, user2) => {
  const user1Friends = user1.getFriends();
  const user2Friends = user2.getFriends();

  return user1Friends.filter((friend) =>
    user2Friends.some((user2Friend) => user2Friend.id === friend.id)
  );
};

export default function User({ id = null, friends = [] } = {}) {
  return {
    id,
    friends,
    getFriends() {
      return this.friends.map((friend) => ({ ...friend }));
    },
  };
}