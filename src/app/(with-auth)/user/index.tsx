import { useUser } from "./hooks";
import { ConfigUser, ViewUser } from "./components";
import * as Models from "./model";

export default function User() {
  const hook = useUser();

  const components: Record<Models.TUserState, JSX.Element> = {
    view: <ViewUser {...hook} />,
    config: <ConfigUser {...hook} />,
  };

  return components[hook.userState];
}
