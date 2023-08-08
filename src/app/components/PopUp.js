'use client';

import { useEffect } from "react";

export default function PopUp() {
    useEffect(() => {
        setTimeout(() => {
            window.alert_modal.showModal();
        }, 60000);
    }, []);

    return (
        <dialog id="alert_modal" className="modal">
            <form method="dialog" className="modal-box bg-slate-700 text-white">
                <h3 className="font-bold text-lg">Don&apos;t forget this</h3>
                <p className="py-4">We don&apos;t provide any visas at BTG Immigration!</p>
                <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-primary">Got it</button>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}