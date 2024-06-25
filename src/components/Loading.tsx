// import { InfinitySpin } from 'react-loader-spinner';
import { BarLoader } from "react-spinners";
// const Loading = () => {
//   return (
//     <div style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
//       <InfinitySpin
//       visible={true}
//       width="150"
//       color="#7478f2"
//       ariaLabel="infinity-spin-loading"
//   />
//     </div>
//   )
// }
const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BarLoader color="#7478f2" />
    </div>
  );
};

export default Loading;
