const ServiceDetailsContent = ({ img, p }) => {
  return (
    <>
      {/* by default fel bootstrap ??? kol ta2sema el howa col wa5ed padding zay nezam el inner-div nfs el concept ha? */}

      {/* ??????????/ map hena whowa el flex m3ah hena ?? wa5od el component marra wa7da <name of compoent /> hykon shayel el row belle feh one time */}
      {/* mafesh da3e aslan l ene l code msh reusable msh hytkrara tany fe hetta tnya bnfs el shape da !!?? */}
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <div className="inner">
          <img src={img} className="w-full max-h-[450px] object-cover" alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <div className="inner">
          <p dangerouslySetInnerHTML={{__html:p}}></p>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;

