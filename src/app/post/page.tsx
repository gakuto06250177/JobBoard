import JobForm from '../../components/JobForm'

export default function PostJob() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">求人投稿</h1>
      <JobForm />
    </div>
  )
}