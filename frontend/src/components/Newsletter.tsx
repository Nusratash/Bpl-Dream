export default function Newsletter() {
  return (
    <section
      className="px-4 pt-16"
      style={{
        background: "linear-gradient(to bottom, white 50%, #070918 50%)",
      }}
    >
      <div className="mx-auto max-w-275 rounded-4xl border border-white bg-white/15 p-6">
        <div
          className="flex flex-col items-center rounded-3xl px-4 py-14 text-center"
          style={{
            backgroundColor: "white",
            backgroundImage:
              "radial-gradient(circle at 15% 100%, rgba(150,205,240,0.9), transparent 30%), radial-gradient(circle at 100% 0%, #efc958, transparent 32%)",
          }}
        >
          <h2 className="text-2xl font-bold text-[#131313] ">
            Subscribe to our Newsletter
          </h2>

          <p className="mt-3 text-gray-600">
            Get the latest updates and news right in your inbox!
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Enter your email" className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-black"
            />

            <button
              className="cursor-pointer rounded-xl px-8 py-3 font-semibold text-black "
              style={{background: "linear-gradient( #d46fc0, #efc958)",}}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}