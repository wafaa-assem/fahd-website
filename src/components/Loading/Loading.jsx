import { Grid } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-green-500 lg:mt-[105px]">
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#ffff"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
};

export default Loading;
