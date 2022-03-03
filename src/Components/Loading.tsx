import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: "0",
        left: "0",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "999",
        position: "absolute",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loading;
