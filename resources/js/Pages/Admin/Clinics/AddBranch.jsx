import AddBranchModal from "./AddBranchModal";
import BranchList from "./BranchList";
import ClinicLayout from "./ClinicLayout";

export default function AddBranch({ clinic, branches }) {
    return (
        <>
            <ClinicLayout clinic={clinic} >
             
                <AddBranchModal clinic={clinic} />
                <BranchList branches={branches} clinic={clinic} />
            </ClinicLayout>
        </>
    )
}