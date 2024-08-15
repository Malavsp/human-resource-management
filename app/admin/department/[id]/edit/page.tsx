import EditForm from "@/app/ui/department/edit-form";
import { fetchDepartmentById } from "@/lib/data";

const EditDepartment = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  const department = await fetchDepartmentById(id);

  return (
    <div className="d-flex justify-content-center align-items-center h-75 mt-6 ">
      <div className="p-3 rounded w-25">
        <EditForm department={department} />
      </div>
    </div>
  );
};

export default EditDepartment;
