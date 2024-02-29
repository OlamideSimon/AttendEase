
const FilterSection = () => {
  return (
    <section className="flex items-center gap-5 flex-col md:flex-row my-10 md:my-20">
      <div className="flex items-center gap-x-4 text-white">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="avatar"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="text-xl font-bold">Hello Chris!</p>
          <small>Hope you are having a great day</small>
        </div>
      </div>
    </section>
  )
}

export default FilterSection
