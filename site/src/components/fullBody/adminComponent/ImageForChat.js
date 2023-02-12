import React, { useState } from "react";

export function ImageModal({ src }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <img onClick={() => setOpen(true)} src={src} />
            {open && (
                <div onClick={() => setOpen(false)} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0, 0, 0, 0.5)" }}>
                    <img style={{ maxHeight: "100%", maxWidth: "100%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} src={src} />
                </div>
            )}
        </>
    );
}