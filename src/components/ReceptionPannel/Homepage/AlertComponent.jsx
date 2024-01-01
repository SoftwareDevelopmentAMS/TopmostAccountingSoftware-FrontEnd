const alerts = [
    {
      msg: "We're currently carrying out maintenance, some features may not work correctly.",
      type: "Warning"
    },
    {
      msg: "Here's some information you may find useful!",
      type: "Info"
    },
    {
      msg: "An error occurred while attempting to register your account...",
      type: "Error"
    },
    {
      msg: "Your registration is now complete!",
      type: "Success"
    },
    {
        msg: "We're currently carrying out maintenance, some features may not work correctly.",
        type: "Warning"
      },
      {
        msg: "Here's some information you may find useful!",
        type: "Info"
      },
      {
        msg: "An error occurred while attempting to register your account...",
        type: "Error"
      },
      {
        msg: "Your registration is now complete!",
        type: "Success"
      },
  ];
  

const AlertComponent = () => {
  const getAlertClass = (type) => {
    switch (type) {
      case "Warning":
        return "bg-yellow-200 border-yellow-600 text-yellow-800";
      case "Info":
        return "bg-blue-200 border-blue-600 text-blue-800";
      case "Error":
        return "bg-red-200 border-red-600 text-red-800";
      case "Success":
        return "bg-green-200 border-green-600 text-green-800";
      default:
        return "";
    }
  };

  return (
    <div className="overflow-auto h-96 scrollingNewstyle rounded-b-lg ">
      {alerts?.map((alert, index) => (
        <div key={index} className={`border-l-4 p-4 my-2 ${getAlertClass(alert.type)} `}>
          <p>{alert.msg}</p>
        </div>
      ))}
    </div>
  );
};
export default AlertComponent

