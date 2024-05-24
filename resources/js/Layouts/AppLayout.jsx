import React from "react";
import { Link, usePage } from "@inertiajs/react";

const AppLayout = ({ children }) => {
    const { url } = usePage();

    return (
        <div>
            <nav className="bg-gray-800 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <Link href="/" className="text-white font-bold text-lg">
                            Berita
                        </Link>
                    </div>
                    <div>
                        <Link
                            href="/"
                            className={`text-white ${
                                url.pathname === "/" ? "font-bold" : ""
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/berita"
                            className={`text-white ml-4 ${
                                url.pathname === "/berita" ? "font-bold" : ""
                            }`}
                        >
                            News
                        </Link>
                        <Link
                            href="/kontak"
                            className={`text-white ml-4 ${
                                url.pathname === "/kontak" ? "font-bold" : ""
                            }`}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/login"
                            className={`text-white ml-4 ${
                                url.pathname === "/login" ? "font-bold" : ""
                            }`}
                        >
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
