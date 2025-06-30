
import AddUserModal from '@/module/AddUserModal';
import { useAppSelector } from '../redux/hooks';
import UserCard from '@/module/UserCard';
import { selectUser } from '@/redux/features/user/userSlice';


export default function User() {
    const users = useAppSelector(selectUser)
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-end items-center">
                <h1 className="mr-auto">Users</h1>
                <AddUserModal />
            </div>

            <div className="flex justify-start items-center gap-4">
                {users.map((user) => (<UserCard user={user} key={user.id} />))}
            </div>

        </div>
    )
}
