'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Job {
  id: number;
  title: string;
  category: string;
  salary: string;
}

const JobForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [salary, setSalary] = useState('');
  const router = useRouter();
  //const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, category, salary }),
      });
      console.log('Response status:', response.status);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add job');
      }
      if (Number(salary) < 100) {
        alert('年収は100万円以上で入力してください');
        return;
      }
      const data = await response.json();
      console.log('Success:', data);
      setTitle('');
      setCategory('');
      setSalary('');
      router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 border rounded w-full max-w-2xl shadow-md mx-auto">
      <h2 className="text-xl text-black font-bold mb-4">求人投稿</h2>
      <div className="mb-4">
        <label className="text-black block mb-2">求人タイトル</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 bg-white text-black w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="text-black block mb-2">カテゴリを選択</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-white text-black w-full"
          required
        >
          <option value="">選択してください</option>
          <option value="エンジニア">エンジニア</option>
          <option value="デザイン">デザイン</option>
          <option value="マーケティング">マーケティング</option>
          <option value="営業">営業</option>
          <option value="事務">事務</option>
          <option value="財務・経理">財務・経理</option>
          <option value="人事">人事</option>
          <option value="カスタマーサポート">カスタマーサポート</option>
          <option value="製造">製造</option>
          <option value="医療・介護">医療・介護</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="text-black block mb-2">年収 (万円)</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="border p-2 bg-white text-black w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        投稿
      </button>
    </form>
  );
};

export default JobForm;