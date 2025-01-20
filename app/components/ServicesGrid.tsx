// app/components/ServicesGrid.jsx
const ServicesGrid = () => {
    return (
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Get our Professional Services
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Jerika Inc gives the most Professional Tech Services with over 2000+ Experienced Software Engineers
            </p>
          </div>
  
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {/* IT Services - Spans 2 rows */}
            <div className="md:col-span-1 md:row-span-2 bg-zinc-900 rounded-3xl p-6 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">IT SERVICES</h3>
            </div>
  
            {/* Network Monitoring */}
            <div className="md:col-span-1 bg-zinc-900 rounded-3xl p-6 flex items-center justify-center">
              <div>
                <h3 className="text-white text-xl font-bold">NETWORK</h3>
                <h3 className="text-amber-500 text-xl font-bold">MONITORING</h3>
              </div>
            </div>
  
            {/* IT Security */}
            <div className="md:col-span-1 bg-zinc-900 rounded-3xl p-6 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">IT SECURITY</h3>
            </div>
  
            {/* Managed IT Services */}
            <div className="md:col-span-2 bg-zinc-900 rounded-3xl p-6 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">MANAGED IT SERVICES</h3>
            </div>
  
            {/* Microsoft Office 365 */}
            <div className="md:col-span-2 bg-zinc-900 rounded-3xl p-6 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">MICROSOFT OFFICE 365</h3>
            </div>
  
            {/* IT Helpdesk */}
            <div className="md:col-span-1 md:row-span-2 bg-zinc-900 rounded-3xl p-6 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">IT HELPDESK</h3>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesGrid;