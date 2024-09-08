'use client';

import { useState, useEffect } from 'react'
import JobFilter from '../components/JobFilter'
import JobList from '../components/JobList'

interface Job {
  id: number;
  title: string;
  category: string;
  salary: string;
}

export default function HomeClient() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minSalary, setMinSalary] = useState<string>("100");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  useEffect(() => {
    // ここで実際のデータフェッチングを行う
    const fetchJobs = async () => {
      try {
        // API呼び出しの例（実際のエンドポイントに置き換えてください）
        const response = await fetch('/api/jobs');
        const data: Job[] = await response.json();
        setJobs(data);
        const uniqueCategories: string[] = Array.from(new Set(data.map((job: Job) => job.category)));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const filtered = jobs.filter(job => 
      (selectedCategories.length === 0 || selectedCategories.includes(job.category)) &&
      parseInt(job.salary) >= parseInt(minSalary)
    );
    setFilteredJobs(filtered);
  }, [jobs, selectedCategories, minSalary]);

  const handleCategoryChange = (newCategories: string[]) => {
    setSelectedCategories(newCategories);
  };

  const handleSalaryChange = (newSalary: string) => {
    setMinSalary(newSalary);
  };

  return (
    <div className="flex flex-1 justify-center">
      <aside className="p-4 bg-gray-200" style={{ width: '200px' }}>
        <JobFilter
          categories={categories}
          onCategoryChange={handleCategoryChange}
          onSalaryChange={handleSalaryChange}
        />
      </aside>
      <main className="p-4 bg-white" style={{ width: '800px' }}>
        <JobList jobs={filteredJobs} />
      </main>
    </div>
  );
}