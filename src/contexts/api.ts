//capture an objects that maps our api calls to our server
import { createContext } from "react";
import { Api } from "../lib/api"
import { SetStateAction } from "react";

// type ApiContextType = {
//     api: Api,
//     setApi: React.Dispatch<SetStateAction<Api>>
// }

export const ApiContext = createContext<Api>(new Api()); //probably needs to be something besides null 