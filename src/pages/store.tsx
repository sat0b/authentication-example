import React, { FC, useEffect, useState } from 'react';
import firebase from "gatsby-plugin-firebase";

interface User {
    first: string;
    last: string;
}

const StorePage: FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        (async () => {
            const _users = await firebase.firestore()
            .collection("users")
            .where("first", "==", "taro")
            .get();
            const castedUsers = _users.docs.map(x => x.data() as User)
            setUsers(castedUsers);
        })();
    }, [users]);

    const onClick = () => {
        firebase.firestore()
            .collection("users")
            .add({first: "taro", last: "tanaka"});
    }
    return (
        <>
            <ol>
               {users && users.map((user: User) => (<li>{user.first} {user.last}</li>))}
            </ol>
            <div onClick={onClick}>追加</div>
        </>
    );
};

export default StorePage;