import React from "react";
import { Link } from "@inertiajs/react";

const AppLayout = ({ children }) => {
    return (
        <div>
            <nav className="bg-gray-800 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <Link href="/" className="text-white font-bold text-lg">
                            Berita
                        </Link>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/" className="text-white">
                            Home
                        </Link>
                        <Link href="/berita" className="text-white">
                            News
                        </Link>
                        <Link href="/kontak" className="text-white">
                            Contact
                        </Link>
                        <Link href="/login" className="text-white">
                            Login
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="container mx-auto mt-8">{children}</div>
        </div>
    );
};

export default AppLayout;
