import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import styles from "./Aside.module.scss";
import Link from "next/link";
import { PrimeIcons } from 'primereact/api';
const menu = [
  {
    title: "Gestión",
    url: "management",
    items: [
      {
        title: "Proyectos",
        url: "projects",
        icon: PrimeIcons.BRIEFCASE,
      },
    ],
  },
  {
    title: "Configuración",
    url: "settings",
    items: [
      {
        title: "Aplicación",
        url: "application",
        icon: PrimeIcons.COG,
      },
    ],
  },
];

export const Aside = (props: any) =>  {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside__avatar}>
        <div className={styles.aside__avatar_image}>
          <Image
            src={"/img/avatar2.jpg"}
            alt={"avatar image"}
            className="rounded-full"
            width={"100%"}
            height={"100"}
            layout="fill"
          />
        </div>
        <p>Jeyson Fuentes</p>
      </div>
      <div className={styles.aside__menu}>
        {menu.map((group) => {
          return (
            <div className={styles.aside__menu_group} key={group.title}>
              <h4>{group.title}</h4>
              <ul>
                {group.items.map((item) => {
                  return (
                    <Link  href={`/${group.url}/${item.url}`} key={item.title} passHref>
                      <li className={styles.aside__menu_item}>
                        <div className={styles.aside__box}>
                          <i className={item.icon}></i>
                        </div>
                        <p>{item.title}</p>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
}


