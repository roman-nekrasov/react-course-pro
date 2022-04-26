import React from "react";
import EmptyPage from "./pages/EmptyPage/EmptyPage";
import Home from "./pages/Home";

interface IGeneralMenu {
    title: string;
    link: linkEnum;
    component: () => JSX.Element
  };

export enum linkEnum {
  HOME = "/",
  POKEDEX = "/pokedex",
  LEGENDARIES = "/legendaries",
  DOCUMENTATION = "/documentation"
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: "Home",
    link: linkEnum.HOME,
    component: () => <Home />
  },
  {
    title: "Pokédex",
    link: linkEnum.POKEDEX,
    component: () => <EmptyPage title="pokedex"/>
  },
  {
    title: "Legendaries",
    link: linkEnum.LEGENDARIES,
    component: () => <EmptyPage title="legend"/>
  },
  {
    title: "Documentation",
    link: linkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="docs "/>
  },
];

interface IAccMenu {
    [n: string]: () => JSX.Element
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
    acc[item.link] = item.component;
    return acc
}, {})

export default routes