import * as TaskManager from "expo-task-manager";
// add path to gnus sdk

TaskManager.defineTask("GNUS_NODE_TASK", async () => {
  try {
    // Initialize GNUS node
    // await SDK.initializeIPFSNode();
    console.log("GNUS Node initialized");
    // Add logic here to handle the continuous flow of data
  } catch (error) {
    console.log("Error initializing GNUS Node:", error);
  }
});
