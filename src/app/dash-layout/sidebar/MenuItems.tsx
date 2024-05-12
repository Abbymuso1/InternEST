import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconCirclePlus,
  IconEdit,
  IconSquareRoundedCheck,
  IconLock,
  IconUsers,
  IconBrandMyOppo
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard",
  },
  {
    navlabel: true,
    subheader: "Main",
  },
  {
    id: uniqueId(),
    title: "Add Resume",
    icon: IconCirclePlus,
    href: "/addresume",
  },
  {
    id: uniqueId(),
    title: "Post a Job",
    icon: IconCirclePlus,
    href: "/postajob",
  },
  {
    id: uniqueId(),
    title: "Applied",
    icon: IconSquareRoundedCheck,
    href: "/applied",
  },
  {
    id: uniqueId(),
    title: "Manage Jobs",
    icon: IconBrandMyOppo,
    href: "/managejobs",
  },
  {
    id: uniqueId(),
    title: "Manage Candidates",
    icon: IconUsers,
    href: "/manageusers",
  },
  {
    navlabel: true,
    subheader: "Account",
  },
  {
    id: uniqueId(),
    title: "Edit Profile",
    icon: IconEdit,
    href: "/editProfile",
  },
  {
    id: uniqueId(),
    title: "Change Password",
    icon: IconLock,
    href: "/changepass",
  },
  {
    id: uniqueId(),
    title: "Logout",
    icon: IconLogin,
    href: "/auth/login",
  },
];

export default Menuitems;
