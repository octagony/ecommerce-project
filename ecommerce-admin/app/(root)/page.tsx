'use client'
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return <div className='p-4'>
    <Modal isOpen title="Test" onClose={()=>{}} description="Test desc">
      Children
    </Modal>
  </div>;
}
 