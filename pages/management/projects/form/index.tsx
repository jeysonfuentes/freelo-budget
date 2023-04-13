import React, { useState } from "react";
import { addLocale } from "primereact/api";
import { Layout } from "../../../../shared/components/layout";

import "primeflex/primeflex.css";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";

import styles from "./Form.module.scss";
import { NextPage } from "next";
import { Button } from "primereact/button";
const ManageProject: NextPage = () => {
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
  const [selectedCity1, setSelectedCity1] = useState<any>(null);

  const [selectedCities1, setSelectedCities] = useState(null);

  const cities = [
    { name: "Ninguno", value: 0 },
    { name: "Muy Facil", value: 12 },
    { name: "Facil", value: 14 },
    { name: "Moderado", value: 16 },
    { name: "Dificil", value: 20 },
    { name: "Muy Dificil", value: 25 },
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

  const [value2, setValue2] = useState("");
  const [value20, setValue20] = useState(0);

  const [dates, setDates] = useState<Date | Date[] | undefined>(undefined);

  const onCityChange = (e: { value: any }) => {
    setSelectedCity1(e.value);
  };

  const [value13, setValue13] = useState(20);
  return (
    <Layout title="Form">
      <div className={styles.project}>
        <div className={styles.project__header}>
          <span className="p-float-label">
            <InputText
              id="projectTitle"
              value={value2}
              className="w-100"
              onChange={(e) => setValue2(e.target.value)}
            />
            <label htmlFor="projectTitle">Título del proyecto</label>
          </span>
        </div>
        <div className={styles.project__configuration}>
          <h2>Configuración del proyecto</h2>
          <div className={styles.project__configuration_content}>
            <Panel
              header="INFORMACIÓN GENERAL"
              className="col-4 h-full"
              toggleable
            >
              <div className={styles.project__configuration_input}>
                <label htmlFor="">Moneda</label>
                <Dropdown
                  value={selectedCity1}
                  options={cities}
                  onChange={onCityChange}
                  optionLabel="name"
                  placeholder="Selecciona"
                />
              </div>
              <div className={styles.project__configuration_input}>
                <label htmlFor="">Categoría</label>
                <Dropdown
                  value={selectedCity1}
                  options={cities}
                  onChange={onCityChange}
                  optionLabel="name"
                  placeholder="Selecciona"
                />
              </div>
            </Panel>
            <Panel header="INDICADORES DE TIEMPO" className="col-4" toggleable>
              <div className={styles.project__configuration_input}>
                <p className="w-6">DIA (Horas)</p>
                <div className={styles.project__configuration_wrapper}>
                  <InputNumber
                    inputId="minmax-buttons"
                    value={value20}
                    onValueChange={(e: any) => setValue20(e.value)}
                    showButtons
                    inputClassName="w-full"
                    min={0}
                    max={50}
                  />
                </div>
              </div>
              <div className={styles.project__configuration_input}>
                <p className="w-6">SEMANA (Días)</p>

                <div className={styles.project__configuration_wrapper}>
                  <InputNumber
                    inputId="minmax-buttons"
                    value={value20}
                    onValueChange={(e: any) => setValue20(e.value)}
                    showButtons
                    inputClassName="w-full"
                    min={0}
                    max={50}
                  />
                </div>
              </div>
              <div className={styles.project__configuration_input}>
                <p className="w-6">MES (Semanas)</p>
                <div className={styles.project__configuration_wrapper}>
                  <InputNumber
                    inputId="minmax-buttons"
                    value={value20}
                    onValueChange={(e: any) => setValue20(e.value)}
                    showButtons
                    inputClassName="w-full"
                    min={0}
                    max={50}
                  />
                </div>
              </div>
            </Panel>
            <Panel header="RECURSOS POR PERFIL" className="col-4" toggleable>
              <div className={styles.project__configuration_input}>
                <p className="w-6">UX/UI</p>
                <div className={styles.project__configuration_wrapper}>
                  <InputNumber
                    inputId="minmax-buttons"
                    value={value20}
                    onValueChange={(e: any) => setValue20(e.value)}
                    showButtons
                    inputClassName="w-full"
                    min={0}
                    max={50}
                  />
                </div>
              </div>
              <div className={styles.project__configuration_input}>
                <p className="w-6">MQ</p>
                <div className={styles.project__configuration_wrapper}>
                  <InputNumber
                    inputId="minmax-buttons"
                    value={value20}
                    onValueChange={(e: any) => setValue20(e.value)}
                    showButtons
                    inputClassName="w-full"
                    min={0}
                    max={50}
                  />
                </div>
              </div>
              <div className={styles.project__configuration_input}>
                <p className="w-6">FE</p>
                <div className={styles.project__configuration_wrapper}>
                  <InputNumber
                    inputId="minmax-buttons"
                    value={value20}
                    onValueChange={(e: any) => setValue20(e.value)}
                    showButtons
                    inputClassName="w-full"
                    min={0}
                    max={50}
                  />
                </div>
              </div>
              <div className={styles.project__configuration_input}>
                <p className="w-6">BE</p>
                <div className={styles.project__configuration_wrapper}>
                  <InputNumber
                    inputId="minmax-buttons"
                    value={value20}
                    onValueChange={(e: any) => setValue20(e.value)}
                    showButtons
                    inputClassName="w-full"
                    min={0}
                    max={50}
                  />
                </div>
              </div>
            </Panel>
          </div>
          <div className={styles.project__configuration_content}>
            <Panel header="ESFUERZO X COSTO/HORA" className="col-4" toggleable>
              <div className={styles.project__configuration_input}>
                <p className="w-6">Muy fácil</p>
                <div className={styles.project__configuration_wrapper}>
                  <InputNumber
                    inputId="minmax-buttons"
                    value={value20}
                    onValueChange={(e: any) => setValue20(e.value)}
                    showButtons
                    inputClassName="w-full"
                    min={0}
                    max={50}
                  />
                </div>
              </div>
              <div className={styles.project__configuration_input}>
                <p className="w-6">Fácil</p>
                <div className={styles.project__configuration_wrapper}>
                  <InputNumber
                    inputId="minmax-buttons"
                    value={value20}
                    onValueChange={(e: any) => setValue20(e.value)}
                    showButtons
                    inputClassName="w-full"
                    min={0}
                    max={50}
                  />
                </div>
              </div>
              <div className={styles.project__configuration_input}>
                <p className="w-6">Intermedio</p>
                <div className={styles.project__configuration_wrapper}>
                  <InputNumber
                    inputId="minmax-buttons"
                    value={value20}
                    onValueChange={(e: any) => setValue20(e.value)}
                    showButtons
                    inputClassName="w-full"
                    min={0}
                    max={50}
                  />
                </div>
              </div>
              <div className={styles.project__configuration_input}>
                <p className="w-6">Dificil</p>
                <div className={styles.project__configuration_wrapper}>
                  <InputNumber
                    inputId="minmax-buttons"
                    value={value20}
                    onValueChange={(e: any) => setValue20(e.value)}
                    showButtons
                    inputClassName="w-full"
                    min={0}
                    max={50}
                  />
                </div>
              </div>
              <div className={styles.project__configuration_input}>
                <p className="w-6">Muy dificil</p>
                <div className={styles.project__configuration_wrapper}>
                  <InputNumber
                    inputId="minmax-buttons"
                    value={value20}
                    onValueChange={(e: any) => setValue20(e.value)}
                    showButtons
                    inputClassName="w-full"
                    min={0}
                    max={50}
                  />
                </div>
              </div>
            </Panel>
            <Panel header="COSTOS ADICIONALES" className="col-4" toggleable>
              <div className={styles.project__configuration_input}>
                <p className="w-6">% Margen de negociación</p>
                <div className={styles.project__configuration_wrapper}>
                  <InputNumber
                    inputId="minmax-buttons"
                    value={value20}
                    onValueChange={(e: any) => setValue20(e.value)}
                    showButtons
                    inputClassName="w-full"
                    min={0}
                    max={50}
                  />
                </div>
              </div>
              <div className={styles.project__configuration_input}>
                <p className="w-6">% Código fuente</p>
                <div className={styles.project__configuration_wrapper}>
                  <InputNumber
                    inputId="minmax-buttons"
                    value={value20}
                    onValueChange={(e: any) => setValue20(e.value)}
                    showButtons
                    inputClassName="w-full"
                    min={0}
                    max={50}
                  />
                </div>
              </div>
              <div className={styles.project__configuration_input}>
                <p className="w-6">% Impuesto</p>
                <div className={styles.project__configuration_wrapper}>
                  <InputNumber
                    inputId="minmax-buttons"
                    value={value20}
                    onValueChange={(e: any) => setValue20(e.value)}
                    showButtons
                    inputClassName="w-full"
                    min={0}
                    max={50}
                  />
                </div>
              </div>
            </Panel>
          </div>
        </div>
        <div className={styles.project__totals}>
          <h2>Totales del proyecto</h2>
          <div className={styles.project__totals_content}>
            <div className={styles.project__totals_time}>
              <ul>
                <li className={styles.project__result_item}>
                  <p className={styles.project__result_item_value}>50</p>
                  <p className={styles.project__result_item_title}>Dias</p>
                </li>
                <li className={styles.project__result_item}>
                  <p className={styles.project__result_item_value}>7.1</p>
                  <p className={styles.project__result_item_title}>Semanas</p>
                </li>
                <li className={styles.project__result_item}>
                  <p className={styles.project__result_item_value}>1.77</p>
                  <p className={styles.project__result_item_title}>Meses</p>
                </li>
              </ul>
            </div>
            <div className={styles.project__totals_time}>
              <ul>
                <li className={styles.project__result_item}>
                  <p className={styles.project__result_item_value}>15</p>
                  <p className={styles.project__result_item_title}>Horas</p>
                </li>
                <li className={styles.project__result_item}>
                  <p className={styles.project__result_item_value}>12</p>
                  <p className={styles.project__result_item_title}>Horas</p>
                </li>
                <li className={styles.project__result_item}>
                  <p className={styles.project__result_item_value}>11</p>
                  <p className={styles.project__result_item_title}>Horas</p>
                </li>
                <li className={styles.project__result_item}>
                  <p className={styles.project__result_item_value}>25</p>
                  <p className={styles.project__result_item_title}>Horas</p>
                </li>
              </ul>
            </div>
            <div className={styles.project__totals_cost}>
              <ul>
                <li className={styles.project__result_item}>
                  <p className={styles.project__result_item_value}>
                    S/. 38,109.34
                  </p>
                  <p className={styles.project__result_item_title}>
                    Sub Total Proyecto
                  </p>
                </li>
                <li className={styles.project__result_item}>
                  <p className={styles.project__result_item_value}>
                    S/. 25,345.56
                  </p>
                  <p className={styles.project__result_item_title}>
                    Codigo Fuente
                  </p>
                </li>
                <li className={styles.project__result_item}>
                  <p className={styles.project__result_item_value}>
                    S/. 500.00
                  </p>
                  <p className={styles.project__result_item_title}>
                    Margen de Negociacion
                  </p>
                </li>
                <li className={styles.project__result_item}>
                  <p className={styles.project__result_item_value_danger}>
                    S/. 111.43
                  </p>
                  <p className={styles.project__result_item_title}>Impuesto</p>
                </li>
                <li className={styles.project__result_item}>
                  <p className={styles.project__result_item_value}>
                    S/. 50,256.52
                  </p>
                  <p className={styles.project__result_item_title}>
                    Total del Proyecto
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.project__requirements}>
          <h2>Requerimientos del proyecto</h2>
          <div className={styles.project__requirements_content}>
            <ul>
              <li className={styles.project__requirement}>
                <div className={styles.project__requirement_title}>
                  <span>RQ-1</span>
                  <InputText
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                  />
                </div>
                <div className={styles.project__requirement_hour}>
                  <h3>Horas Trabajo</h3>
                  <ul>
                    <li>
                      <InputNumber
                        placeholder="UX/UI"
                        value={value13}
                        max={32}
                        min={0}
                        onValueChange={(e: any) => setValue13(e.value)}
                        suffix=" hr. UX/UI"
                      />
                    </li>
                    <li>
                      <InputNumber
                        placeholder="MQ"
                        value={value13}
                        max={32}
                        min={0}
                        onValueChange={(e: any) => setValue13(e.value)}
                        suffix=" hr. MQ"
                      />
                    </li>
                    <li>
                      <InputNumber
                        placeholder="FE"
                        value={value13}
                        max={32}
                        min={0}
                        onValueChange={(e: any) => setValue13(e.value)}
                        suffix=" hr. FE"
                      />
                    </li>
                    <li>
                      <InputNumber
                        placeholder="BE"
                        value={value13}
                        max={32}
                        min={0}
                        onValueChange={(e: any) => setValue13(e.value)}
                        suffix=" hr. BE"
                      />
                    </li>
                  </ul>
                </div>
                <div className={styles.project__requirement_effort}>
                  <h3>Esfuerzo</h3>
                  <ul>
                    <li>
                      <Dropdown
                        value={selectedCity1}
                        options={cities}
                        onChange={onCityChange}
                        optionLabel="name"
                        placeholder="Selecciona"
                      />
                    </li>
                    <li>
                      <Dropdown
                        value={selectedCity1}
                        options={cities}
                        onChange={onCityChange}
                        optionLabel="name"
                        placeholder="Selecciona"
                      />
                    </li>
                    <li>
                      <Dropdown
                        value={selectedCity1}
                        options={cities}
                        onChange={onCityChange}
                        optionLabel="name"
                        placeholder="Selecciona"
                      />
                    </li>
                    <li>
                      <Dropdown
                        value={selectedCity1}
                        options={cities}
                        onChange={onCityChange}
                        optionLabel="name"
                        placeholder="Selecciona"
                      />
                    </li>
                  </ul>
                </div>
                <div className={styles.project__requirement_cost}>
                  <h3>Costo/Hora</h3>
                  <ul>
                    <li>
                      <h3>S/. 128.00</h3>
                      <p>UX/UI</p>
                    </li>
                    <li>
                      <h3>S/. 128.00</h3>
                      <p>MQ</p>
                    </li>
                    <li>
                      <h3>S/. 128.00</h3>
                      <p>FE</p>
                    </li>
                    <li>
                      <h3>S/. 128.00</h3>
                      <p>BE</p>
                    </li>
                  </ul>
                </div>
                <div className={styles.project__requirement_totals}>
                  <div className={styles.project__requirement_totals_hours}>
                    <p>
                      <span>0</span> Hrs
                    </p>
                    <p>Total Horas RQ</p>
                  </div>
                  <div className={styles.project__requirement_totals_cost}>
                    <p>
                      <span>S/. 128.00</span>
                    </p>
                    <p>Costo Requerimiento</p>
                  </div>
                </div>
              </li>
            </ul>
            <Button
              label="Nuevo Requerimiento"
              icon="pi pi-plus"
              className="p-button-primary"
              iconPos="left"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ManageProject;
