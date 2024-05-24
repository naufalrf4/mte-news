// resources/js/Pages/Berita/Index.js
import React from 'react';
import AppLayout from '@/Layouts/AppLayout';

const BeritaIndex = ({ berita }) => {
    return (
        <AppLayout>
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Daftar Berita</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {berita.map(item => (
                    <div key={item.link} className="mb-4">
                        <a href={item.link} className="block text-blue-500 hover:underline mb-2">
                            <img src={item.thumbnail} alt={item.title} className="rounded-lg mb-2" />
                            {item.title}
                        </a>
                        <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </AppLayout>
    );
};

export default BeritaIndex;
