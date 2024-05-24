import AppLayout from '@/Layouts/AppLayout';
import React, { useState } from 'react';

const Kontak = () => {
    const [formData, setFormData] = useState({
        nama: '',
        subjek: '',
        email: '',
        pesan: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <AppLayout>
        <div className="container mx-auto flex justify-center">
            <div className="w-1/2 bg-gray-100 p-8 rounded-lg mt-8">
                <h1 className="text-2xl font-bold mb-4">Hubungi Kami</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nama" className="block text-gray-700 font-bold mb-2">Nama</label>
                        <input type="text" id="nama" name="nama" value={formData.nama} onChange={handleChange} className="border rounded-md px-3 py-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subjek" className="block text-gray-700 font-bold mb-2">Subjek</label>
                        <input type="text" id="subjek" name="subjek" value={formData.subjek} onChange={handleChange} className="border rounded-md px-3 py-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border rounded-md px-3 py-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pesan" className="block text-gray-700 font-bold mb-2">Pesan</label>
                        <textarea id="pesan" name="pesan" value={formData.pesan} onChange={handleChange} className="border rounded-md px-3 py-2 w-full h-32"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Kirim</button>
                </form>
            </div>
        </div>
        </AppLayout>
    );
};

export default Kontak;
