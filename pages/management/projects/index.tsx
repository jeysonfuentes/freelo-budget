import { NextPage } from "next"
import { useState } from "react";

import { AutoComplete } from "primereact/autocomplete";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";
import "primeflex/primeflex.css";
import styles from "./Projects.module.scss";
import { Layout } from "../../../shared/components/layout";
import { useRouter } from "next/router";

const Projects:NextPage = () => {

  const [countries, setCountries] = useState<any>([]);
  const [selectedCountry1, setSelectedCountry] = useState<any>(null);
  const [filteredCountries, setFilteredCountries] = useState<any>(null);
  const searchCountry = (event: { query: string }) => {
    setTimeout(() => {
      let _filteredCountries;
      if (!event.query.trim().length) {
        _filteredCountries = [...countries];
      } else {
        _filteredCountries = countries.filter((country: any) => {
          return country.name
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setFilteredCountries(_filteredCountries);
    }, 250);
  };

  const [selectedCities1, setSelectedCities] = useState(null);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  addLocale("es", {
    firstDayOfWeek: 1,
    dayNames: [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ],
    dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
    monthNames: [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ],
    monthNamesShort: [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ],
    today: "Hoy",
    clear: "Claro",
  });

  const [dates, setDates] = useState<Date | Date[] | undefined>(undefined);
  const router = useRouter()
  return (
    <Layout title="Projects Budget">
      <div className={styles.projects}>
        <div className={styles.projects__header}>
          <div className={styles.projects__header_title}>
            <i className="pi pi-money-bill"></i>
            <h4>Budget Project</h4>
          </div>
          <Button
            label="Nuevo Proyecto"
            icon="pi pi-plus"
            className="p-button-primary"
            iconPos="left"
            onClick={() => {
              router.push('projects/form')
            }}
            
          />
        </div>
        <div className={styles.projects__search}>
          <div className={styles.projects__input_search}>
            <AutoComplete
              value={selectedCountry1}
              suggestions={filteredCountries}
              completeMethod={searchCountry}
              placeholder="Busca un proyecto..."
              field="name"
              className="w-full"
              inputClassName="w-12"
              onChange={(e) => setSelectedCountry(e.value)}
            />
          </div>

          <div className={styles.projects__filters}>
            <MultiSelect
              value={selectedCities1}
              options={cities}
              onChange={(e) => setSelectedCities(e.value)}
              optionLabel="name"
              placeholder="Selecciona una categoria"
              maxSelectedLabels={3}
            />
            <Calendar
              id="range"
              value={dates}
              onChange={(e) => setDates(e.value)}
              selectionMode="range"
              readOnlyInput
              dateFormat="dd/mm/yy"
              showIcon
            />
          </div>
        </div>

        <div className={styles.projects__results}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return (
              <div key={item} className={styles.projects__item}>
                <ul>
                  <li>
                    <Button
                      label="PDF"
                      icon="pi pi-download"
                      className="p-button-primary"
                      iconPos="right"
                    />
                  </li>
                  <li> Aplicacion de pedidos online...</li>
                  <li>
                    <p className={styles.projects__item_value}>50 Dias</p>{" "}
                    <p className={styles.projects__item_title}>DURACIÓN</p>
                  </li>
                  <li></li>
                  <li>
                    <p className={styles.projects__item_value}>S/. 140.00</p>
                    <p className={styles.projects__item_title}>
                      MARGEN NEGOCIACIÓN
                    </p>
                  </li>
                  <li>
                    <p className={styles.projects__item_value}>S/. 3640.00</p>
                    <p className={styles.projects__item_title}>TOTAL</p>
                  </li>
                  <li>
                    <Button
                      icon="pi pi-pencil"
                      className="p-button-rounded p-button-warning"
                      aria-label="Edit"
                    />
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Projects;
