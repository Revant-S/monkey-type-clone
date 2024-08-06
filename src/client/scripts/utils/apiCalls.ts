import { TestState } from "../../../types/test";
import { api } from "./axiosconfig";


export const submitTest = async (testState: TestState) => {
    try {
        const response = await api.post("/testRoutes/submit", {
            testState
        })
        alert(response.data.message)
    } catch (error) {
        alert("SomeThing went WRong!!")
        window.location.href = "/auth/signin"
    }
}