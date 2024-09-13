import Container from "@/components/Container/Container";
import LoadingError from "@/components/Error/LoadingError";
import Loader from "@/components/Loader/Loader";
import DashboardHeader from "@/components/SectionHeader/DashboardHeader";
import {
    useDeleteUserMutation,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
} from "@/redux/api/user/user.api";
import { TQueryParams } from "@/types/global";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import NoData from "@/components/Error/NoData";
import FadeInUpAnimation from "@/components/Animation/FadeInUpAnimtaion";
import {
  selectCurrentUser,
  TUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import SlideInFromLeft from "@/components/Animation/SlideFromLeft";
import PaginationComponent from "@/components/Pagination/PaginationComponent";
import UpdateUserRole from "@/components/Modal/UpdateUserRoleModal";
import { useAppSelector } from "@/redux/hooks";
import DeleteModal from "@/components/Modal/DeleteModal";
import { Helmet } from "react-helmet-async";


const UserManagement = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const token = useAppSelector(useCurrentToken);
  const [params] = useState<TQueryParams[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: usersData,
    isLoading,
    isError,
  } = useGetAllUsersQuery([{ name: "page", value: page }, ...params],{pollingInterval:30000});
  const [updateUserRole] = useUpdateUserRoleMutation();
  const [deleteUser] = useDeleteUserMutation();

  if (isLoading) {
    return <Loader height="h-[80vh]" />;
  }
  if (isError || !usersData) {
    return <LoadingError/>;
  }

  /* handle update user role */
  const handleUpdateRole = async (id: string) => {
    await updateUserRole({ id, token });
  };

  /* handle pagination */
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  /* handle role change */
  const handleDeleteUser = async (id: string) => {
    await deleteUser({id,token})
  };

  const totalPage = usersData?.meta.totalPage;

  return (
    <div className="md:my-5 mb-20 sm:mb-40 ">
      <Helmet title="Manage Users" />
      <Container>
        <DashboardHeader title="Manage Users" />
        {usersData?.data.length === 0 ? (
          <NoData />
        ) : (
          <>
            <FadeInUpAnimation>
              <div className="overflow-x-auto">
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead>SL</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {usersData?.data.map((user: TUser, index: number) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {(page - 1) * usersData?.meta.limit + index + 1}
                        </TableCell>
                        <TableCell className="flex flex-col gap-y-1 sm:flex-row  sm:items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                          <img
                            className="w-14 h-14 rounded-md"
                            src={
                              !user.pImage
                                ? "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                                : user.pImage
                            }
                            alt="Jese image"
                          />
                          <div className="sm:ps-3 capitalize">
                            <div className="text-base font-semibold">
                              {user.name}
                            </div>
                            <div className="font-normal text-gray-500 capitalize">
                              {user.id}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          <div className="flex flex-col sm:flex-row  gap-2 justify-center items-center">
                            {/* SuperAdmin can update any role except their own */}
                            {currentUser?.role === "superAdmin" &&
                            user.role !== currentUser.role ? (
                              <>
                                <UpdateUserRole
                                  onRoleChange={() =>
                                    handleUpdateRole(user._id as string)
                                  }
                                  role={user.role}
                                  buttonName="Update"
                                />
                                <DeleteModal
                                  entityName="User"
                                  onDelete={() =>
                                    handleDeleteUser(user._id as string)
                                  }
                                  buttonName="Delete"
                                />
                              </>
                            ) : currentUser?.role === "admin" &&
                              user?.role === "user" ? (
                              <>
                                <UpdateUserRole
                                  onRoleChange={() =>
                                    handleUpdateRole(user._id as string)
                                  }
                                  role={user.role}
                                  buttonName="Update"
                                />
                                <DeleteModal
                                  entityName="User"
                                  onDelete={() =>
                                    handleDeleteUser(user._id as string)
                                  }
                                  buttonName="Delete"
                                />
                              </>
                            ) : (
                              "N/A"
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </FadeInUpAnimation>
            <SlideInFromLeft>
              <div className="mt-8">
                <PaginationComponent
                  page={page}
                  handlePageChange={handlePageChange}
                  totalPage={totalPage}
                />
              </div>
            </SlideInFromLeft>
          </>
        )}
      </Container>
    </div>
  );
};

export default UserManagement;
