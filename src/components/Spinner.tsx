// import { InfinitySpin } from 'react-loader-spinner';
import { SyncLoader } from "react-spinners";
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
const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SyncLoader size={4} color="#7478f2" />
    </div>
  );
};

export default Spinner;
