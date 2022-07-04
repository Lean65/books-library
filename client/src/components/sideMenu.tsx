import "./styles/sideMenu.css";

// let style = { minWidth: "5vh", minHeight: "5vh", margin: "2px" };

export default (params: any) => {
  return (
    <div className="sidemenu">
      <label>Buscar por </label>
      <select name="" id="">
        <option value="">---</option>
        <option value="">Autor</option>
        <option value="">Año</option>
      </select>
    </div>
  );
};

// {/* <button style={{ width: "5vh", height: "5vh", margin: "2px" }}>X</button>
// <button style={{ width: "5vh", height: "5vh", margin: "2px" }}>X</button>
// <button style={{ width: "5vh", height: "5vh", margin: "2px" }}>X</button>
// <button style={{ width: "5vh", height: "5vh", margin: "2px" }}>X</button>
// <button style={{ width: "5vh", height: "5vh", margin: "2px" }}>X</button>
// <button style={{ width: "5vh", height: "5vh", margin: "2px" }}>X</button>
// <button style={{ width: "5vh", height: "5vh", margin: "2px" }}>X</button>
// <button style={{ width: "5vh", height: "5vh", margin: "2px" }}>X</button> */}
