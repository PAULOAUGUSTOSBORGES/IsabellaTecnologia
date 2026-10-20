const { useState, useMemo, useEffect } = React;
const Icons = {
  Search: ({ className = "w-5 h-5" }) => /* @__PURE__ */ React.createElement("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z" })),
  Building: ({ className = "w-5 h-5" }) => /* @__PURE__ */ React.createElement("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" })),
  MapPin: ({ className = "w-5 h-5" }) => /* @__PURE__ */ React.createElement("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }), /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })),
  Phone: ({ className = "w-5 h-5" }) => /* @__PURE__ */ React.createElement("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" })),
  Mail: ({ className = "w-5 h-5" }) => /* @__PURE__ */ React.createElement("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })),
  Briefcase: ({ className = "w-5 h-5" }) => /* @__PURE__ */ React.createElement("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })),
  Copy: ({ className = "w-4 h-4" }) => /* @__PURE__ */ React.createElement("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" })),
  Check: ({ className = "w-4 h-4" }) => /* @__PURE__ */ React.createElement("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2.5 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" })),
  Code: ({ className = "w-4 h-4" }) => /* @__PURE__ */ React.createElement("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" })),
  ChevronDown: ({ className = "w-4 h-4" }) => /* @__PURE__ */ React.createElement("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" })),
  ChevronRight: ({ className = "w-4 h-4" }) => /* @__PURE__ */ React.createElement("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5l7 7-7 7" })),
  Alert: ({ className = "w-5 h-5" }) => /* @__PURE__ */ React.createElement("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" })),
  Spinner: ({ className = "w-5 h-5" }) => /* @__PURE__ */ React.createElement("svg", { className: `animate-spin ${className}`, fill: "none", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), /* @__PURE__ */ React.createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })),
  BadgeCheck: ({ className = "w-5 h-5" }) => /* @__PURE__ */ React.createElement("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" })),
  Database: ({ className = "w-5 h-5" }) => /* @__PURE__ */ React.createElement("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" })),
  Sparkles: ({ className = "w-4 h-4" }) => /* @__PURE__ */ React.createElement("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" }))
};
const applyCnpjMask = (value) => {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 14);
  return digits.replace(/^(\d{2})(\d)/, "$1.$2").replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3").replace(/\.(\d{3})(\d)/, ".$1/$2").replace(/(\d{4})(\d)/, "$1-$2");
};
const applyCepMask = (value) => {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length === 8) {
    return digits.replace(/^(\d{5})(\d{3})$/, "$1-$2");
  }
  return value;
};
const formatCurrencyBRL = (value) => {
  if (value === null || value === void 0 || value === "") return "N\xE3o informado";
  const num = typeof value === "number" ? value : parseFloat(String(value).replace(",", "."));
  if (isNaN(num)) return String(value);
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(num);
};
const formatDateString = (val) => {
  if (typeof val !== "string") return val;
  if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
    const [year, month, day] = val.split("-");
    return `${day}/${month}/${year}`;
  }
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(val)) {
    const date = new Date(val);
    if (!isNaN(date.getTime())) {
      return date.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
  }
  return val;
};
const prettifyKey = (key) => {
  if (!key) return "";
  const dictionary = {
    cnpj: "CNPJ",
    cnpj_raiz: "CNPJ Raiz",
    cnpj_ordem: "CNPJ Ordem",
    cnpj_digito_verificador: "D\xEDgito Verificador",
    razao_social: "Raz\xE3o Social",
    nome_fantasia: "Nome Fantasia",
    capital_social: "Capital Social",
    atualizado_em: "Atualizado em",
    inscricoes_estaduais: "Inscri\xE7\xF5es Estaduais",
    inscricao_estadual: "Inscri\xE7\xE3o Estadual",
    atividade_principal: "Atividade Principal (CNAE)",
    atividades_secundarias: "Atividades Secund\xE1rias",
    natureza_juridica: "Natureza Jur\xEDdica",
    qualificacao_do_responsavel: "Qualifica\xE7\xE3o do Respons\xE1vel",
    qualificacao_socio: "Qualifica\xE7\xE3o do S\xF3cio",
    qualificacao_representante: "Qualifica\xE7\xE3o do Representante",
    situacao_cadastral: "Situa\xE7\xE3o Cadastral",
    data_situacao_cadastral: "Data da Situa\xE7\xE3o Cadastral",
    motivo_situacao_cadastral: "Motivo da Situa\xE7\xE3o Cadastral",
    data_inicio_atividade: "Data de In\xEDcio da Atividade",
    data_entrada: "Data de Entrada",
    data_exclusao_do_simples: "Data de Exclus\xE3o do Simples",
    data_opcao_pelo_simples: "Data de Op\xE7\xE3o pelo Simples",
    data_opcao_pelo_mei: "Data de Op\xE7\xE3o pelo MEI",
    data_exclusao_do_mei: "Data de Exclus\xE3o do MEI",
    cpf_cnpj_socio: "CPF/CNPJ do S\xF3cio",
    cpf_representante_legal: "CPF do Representante Legal",
    faixa_etaria: "Faixa Et\xE1ria",
    uf: "UF",
    cep: "CEP",
    ddd1: "DDD 1",
    ddd2: "DDD 2",
    ddd_fax: "DDD Fax",
    ibge_id: "C\xF3digo IBGE",
    siafi_id: "C\xF3digo SIAFI",
    id_pais: "ID do Pa\xEDs",
    iso2: "Sigla ISO2",
    iso3: "Sigla ISO3",
    comex_id: "ID Comex",
    simples: "Simples Nacional / MEI",
    mei: "Optante pelo MEI",
    socios: "Quadro Societ\xE1rio (QSA)",
    estabelecimento: "Dados do Estabelecimento",
    regimes_tributarios: "Regimes Tribut\xE1rios",
    suframa: "Inscri\xE7\xF5es SUFRAMA"
  };
  const lower = String(key).toLowerCase();
  if (dictionary[lower]) return dictionary[lower];
  return String(key).replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};
const countObjStats = (node) => {
  let total = 0;
  let filled = 0;
  const traverse = (current) => {
    if (current === null || current === void 0) {
      total += 1;
      return;
    }
    if (typeof current !== "object") {
      total += 1;
      if (String(current).trim() !== "") {
        filled += 1;
      }
      return;
    }
    if (Array.isArray(current)) {
      if (current.length === 0) {
        total += 1;
        return;
      }
      current.forEach((item) => traverse(item));
      return;
    }
    const keys = Object.keys(current);
    if (keys.length === 0) {
      total += 1;
      return;
    }
    keys.forEach((k) => traverse(current[k]));
  };
  traverse(node);
  return { total, filled, empty: total - filled };
};
const SmartFormattedValue = ({ fieldKey, value }) => {
  const keyLower = String(fieldKey || "").toLowerCase();
  if (value === null || value === void 0 || value === "") {
    return /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-400 italic" }, "N\xE3o informado");
  }
  if (typeof value === "boolean") {
    return /* @__PURE__ */ React.createElement(
      "span",
      {
        className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${value ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-rose-50 text-rose-700 border-rose-200"}`
      },
      /* @__PURE__ */ React.createElement("span", { className: `w-1.5 h-1.5 rounded-full ${value ? "bg-emerald-500" : "bg-rose-500"}` }),
      value ? "Sim (Ativo)" : "N\xE3o"
    );
  }
  const strVal = String(value).trim();
  if (strVal.toLowerCase() === "sim" || strVal.toLowerCase() === "n\xE3o" || strVal.toLowerCase() === "nao") {
    const isYes = strVal.toLowerCase() === "sim";
    return /* @__PURE__ */ React.createElement(
      "span",
      {
        className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${isYes ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-slate-100 text-slate-700 border-slate-200"}`
      },
      /* @__PURE__ */ React.createElement("span", { className: `w-1.5 h-1.5 rounded-full ${isYes ? "bg-emerald-500" : "bg-slate-400"}` }),
      isYes ? "Sim" : "N\xE3o"
    );
  }
  if (keyLower.includes("capital_social")) {
    return /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200" }, formatCurrencyBRL(value));
  }
  if (keyLower.includes("cnpj") && !keyLower.includes("raiz") && !keyLower.includes("ordem") && !keyLower.includes("digito") && /^\d{14}$/.test(strVal.replace(/\D/g, ""))) {
    return /* @__PURE__ */ React.createElement("span", { className: "font-mono font-medium text-indigo-950 bg-indigo-50/80 px-2 py-0.5 rounded border border-indigo-100" }, applyCnpjMask(strVal));
  }
  if (keyLower === "cep" || keyLower.includes("cep") && /^\d{8}$/.test(strVal.replace(/\D/g, ""))) {
    return /* @__PURE__ */ React.createElement("span", { className: "font-mono font-medium text-slate-800 bg-slate-100 px-2 py-0.5 rounded" }, applyCepMask(strVal));
  }
  if (/^\d{4}-\d{2}-\d{2}/.test(strVal)) {
    return /* @__PURE__ */ React.createElement("span", { className: "font-medium text-slate-800 bg-amber-50/70 border border-amber-200/70 px-2 py-0.5 rounded text-xs sm:text-sm" }, formatDateString(strVal));
  }
  if (keyLower === "situacao_cadastral") {
    const isAtiva = strVal.toLowerCase().includes("ativa");
    return /* @__PURE__ */ React.createElement(
      "span",
      {
        className: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${isAtiva ? "bg-emerald-100 text-emerald-800 border border-emerald-300" : "bg-amber-100 text-amber-800 border border-amber-300"}`
      },
      strVal
    );
  }
  if (keyLower.includes("email") && strVal.includes("@")) {
    return /* @__PURE__ */ React.createElement(
      "a",
      {
        href: `mailto:${strVal.toLowerCase()}`,
        className: "text-indigo-600 hover:text-indigo-800 underline break-all font-medium"
      },
      strVal.toLowerCase()
    );
  }
  return /* @__PURE__ */ React.createElement("span", { className: "text-slate-800 font-medium break-words" }, strVal);
};
const DynamicJsonNode = ({ nodeKey, value, depth = 0, expandSignal = 0 }) => {
  const [isOpen, setIsOpen] = useState(depth < 2);
  React.useEffect(() => {
    if (expandSignal > 0) setIsOpen(true);
    if (expandSignal < 0) setIsOpen(false);
  }, [expandSignal]);
  const isObject = value !== null && typeof value === "object" && !Array.isArray(value);
  const isArray = Array.isArray(value);
  if (!isObject && !isArray) {
    return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between py-2.5 px-3.5 rounded-lg bg-white border border-slate-200/80 hover:border-indigo-200 transition-colors gap-1 sm:gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium" }, /* @__PURE__ */ React.createElement("span", null, prettifyKey(nodeKey)), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded" }, nodeKey)), /* @__PURE__ */ React.createElement("div", { className: "text-sm sm:text-right" }, /* @__PURE__ */ React.createElement(SmartFormattedValue, { fieldKey: nodeKey, value })));
  }
  if (isArray) {
    return /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-slate-200 bg-slate-50/60 overflow-hidden transition-all" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        className: "w-full flex items-center justify-between px-4 py-3 bg-slate-100/80 hover:bg-slate-200/60 transition-colors text-left"
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2.5 flex-wrap" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-600" }, isOpen ? /* @__PURE__ */ React.createElement(Icons.ChevronDown, null) : /* @__PURE__ */ React.createElement(Icons.ChevronRight, null)), /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-slate-800 text-sm sm:text-base" }, prettifyKey(nodeKey)), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-mono text-slate-400" }, "(", nodeKey, ")")),
      /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800" }, value.length, " ", value.length === 1 ? "registro" : "registros")
    ), isOpen && /* @__PURE__ */ React.createElement("div", { className: "p-3 sm:p-4 space-y-3" }, value.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "text-xs text-slate-400 italic py-2 px-3 bg-white rounded-lg border border-dashed border-slate-200" }, "Lista vazia (nenhum registro retornado pela API)") : value.map((item, idx) => {
      const isItemObj = item !== null && typeof item === "object";
      if (!isItemObj) {
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            key: idx,
            className: "flex items-center justify-between py-2 px-3 bg-white rounded-lg border border-slate-200"
          },
          /* @__PURE__ */ React.createElement("span", { className: "text-xs font-mono text-slate-400" }, "#", idx + 1),
          /* @__PURE__ */ React.createElement(SmartFormattedValue, { fieldKey: nodeKey, value: item })
        );
      }
      const itemTitle = item.nome || item.descricao || item.inscricao_estadual || item.razao_social || item.regime_tributario || `Item #${idx + 1}`;
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: idx,
          className: "rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
        },
        /* @__PURE__ */ React.createElement("div", { className: "px-3.5 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-indigo-700 truncate" }, idx + 1, ". ", itemTitle), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-mono text-slate-400 shrink-0" }, "\xCDndice [", idx, "]")),
        /* @__PURE__ */ React.createElement("div", { className: "p-3 space-y-2" }, Object.entries(item).map(([subKey, subVal]) => /* @__PURE__ */ React.createElement(
          DynamicJsonNode,
          {
            key: subKey,
            nodeKey: subKey,
            value: subVal,
            depth: depth + 1,
            expandSignal
          }
        )))
      );
    })));
  }
  const entries = Object.entries(value);
  const primitives = entries.filter(
    ([, v]) => v === null || typeof v !== "object"
  );
  const complexes = entries.filter(
    ([, v]) => v !== null && typeof v === "object"
  );
  return /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => setIsOpen(!isOpen),
      className: "w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100/80 transition-colors text-left border-b border-slate-200/80"
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2.5 flex-wrap" }, /* @__PURE__ */ React.createElement("span", { className: "text-indigo-600" }, isOpen ? /* @__PURE__ */ React.createElement(Icons.ChevronDown, null) : /* @__PURE__ */ React.createElement(Icons.ChevronRight, null)), /* @__PURE__ */ React.createElement("span", { className: "font-bold text-slate-800 text-sm sm:text-base" }, prettifyKey(nodeKey)), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-mono text-slate-400" }, "(", nodeKey, ")")),
    /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-200/80 text-slate-700" }, entries.length, " ", entries.length === 1 ? "campo" : "campos")
  ), isOpen && /* @__PURE__ */ React.createElement("div", { className: "p-3 sm:p-4 space-y-3 bg-slate-50/30" }, primitives.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2.5" }, primitives.map(([k, v]) => /* @__PURE__ */ React.createElement(
    DynamicJsonNode,
    {
      key: k,
      nodeKey: k,
      value: v,
      depth: depth + 1,
      expandSignal
    }
  ))), complexes.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "space-y-3 pt-1" }, complexes.map(([k, v]) => /* @__PURE__ */ React.createElement(
    DynamicJsonNode,
    {
      key: k,
      nodeKey: k,
      value: v,
      depth: depth + 1,
      expandSignal
    }
  )))));
};
function App() {
  const [cnpjInput, setCnpjInput] = useState("00.000.000/0001-91");
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showRawJson, setShowRawJson] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [copiedCnpj, setCopiedCnpj] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandSignal, setExpandSignal] = useState(0);
  const sampleCnpjs = [
    { label: "Banco do Brasil", cnpj: "00000000000191" },
    { label: "Petrobras", cnpj: "33000167000101" },
    { label: "Magazine Luiza", cnpj: "47960950000121" },
    { label: "Vale S.A.", cnpj: "33592510000154" }
  ];
  const handleInputChange = (e) => {
    setCnpjInput(applyCnpjMask(e.target.value));
    if (error) setError(null);
  };
  const fetchCnpjData = async (rawCnpjToFetch) => {
    const cleanCnpj = String(rawCnpjToFetch ?? cnpjInput).replace(/\D/g, "");
    if (cleanCnpj.length !== 14) {
      setError({
        title: "CNPJ Inv\xE1lido",
        message: "Digite os 14 d\xEDgitos num\xE9ricos do CNPJ para realizar a consulta."
      });
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://publica.cnpj.ws/cnpj/${cleanCnpj}`, {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      });
      if (!response.ok) {
        let apiMsg = "";
        try {
          const errJson = await response.json();
          apiMsg = errJson?.detalhes || errJson?.mensagem || errJson?.message || "";
        } catch {
        }
        if (response.status === 404) {
          throw new Error(apiMsg || "CNPJ n\xE3o encontrado na base de dados p\xFAblica.");
        }
        if (response.status === 429) {
          throw new Error(
            apiMsg || "Limite de requisi\xE7\xF5es excedido (A API p\xFAblica permite at\xE9 3 consultas por minuto). Aguarde alguns segundos e tente novamente."
          );
        }
        if (response.status === 400) {
          throw new Error(apiMsg || "Formato de CNPJ inv\xE1lido rejeitado pelo servidor.");
        }
        throw new Error(apiMsg || `Erro HTTP ${response.status} ao consultar a API.`);
      }
      const data = await response.json();
      setCompanyData(data);
      setExpandSignal(0);
    } catch (err) {
      setError({
        title: "Falha na Consulta",
        message: err.message || "N\xE3o foi poss\xEDvel conectar ao servidor https://publica.cnpj.ws."
      });
    } finally {
      setLoading(false);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchCnpjData(cnpjInput);
  };
  const handleSelectSample = (sampleCnpj) => {
    const masked = applyCnpjMask(sampleCnpj);
    setCnpjInput(masked);
    fetchCnpjData(sampleCnpj);
  };
  const handleCopyJson = async () => {
    if (!companyData) return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(companyData, null, 2));
      setCopiedJson(true);
      setTimeout(() => setCopiedJson(false), 2500);
    } catch {
    }
  };
  const handleCopyCnpj = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCnpj(true);
      setTimeout(() => setCopiedCnpj(false), 2e3);
    } catch {
    }
  };
  const stats = useMemo(() => {
    if (!companyData) return { total: 0, filled: 0, empty: 0 };
    return countObjStats(companyData);
  }, [companyData]);
  const filteredCompanyData = useMemo(() => {
    if (!companyData || !searchTerm.trim()) return companyData;
    const term = searchTerm.toLowerCase().trim();
    const filterNode = (node, currentKey = "") => {
      const keyMatches = currentKey.toLowerCase().includes(term) || prettifyKey(currentKey).toLowerCase().includes(term);
      if (node === null || node === void 0) {
        return keyMatches ? node : void 0;
      }
      if (typeof node !== "object") {
        const valMatches = String(node).toLowerCase().includes(term);
        return keyMatches || valMatches ? node : void 0;
      }
      if (Array.isArray(node)) {
        if (keyMatches) return node;
        const filteredArr = node.map((item) => filterNode(item, "")).filter((item) => item !== void 0);
        return filteredArr.length > 0 ? filteredArr : void 0;
      }
      if (keyMatches) return node;
      const filteredObj = {};
      let hasMatch = false;
      for (const [k, v] of Object.entries(node)) {
        const res = filterNode(v, k);
        if (res !== void 0) {
          filteredObj[k] = res;
          hasMatch = true;
        }
      }
      return hasMatch ? filteredObj : void 0;
    };
    return filterNode(companyData) || {};
  }, [companyData, searchTerm]);
  const summary = useMemo(() => {
    if (!companyData) return null;
    const est = companyData.estabelecimento || {};
    const cnpjFormatted = applyCnpjMask(est.cnpj || companyData.cnpj_raiz || "");
    const razaoSocial = companyData.razao_social || "N\xE3o informado";
    const nomeFantasia = est.nome_fantasia || "N\xE3o possui nome fantasia registrado";
    const situacao = est.situacao_cadastral || "N\xE3o informada";
    const dataSituacao = est.data_situacao_cadastral ? formatDateString(est.data_situacao_cadastral) : null;
    const tipoUnidade = est.tipo || "";
    const logradouroParts = [est.tipo_logradouro, est.logradouro].filter(Boolean).join(" ");
    const numero = est.numero ? `, ${est.numero}` : "";
    const complemento = est.complemento ? ` - ${est.complemento}` : "";
    const bairro = est.bairro ? `${est.bairro}` : "";
    const cep = est.cep ? applyCepMask(est.cep) : "N\xE3o informado";
    const cidade = est.cidade?.nome || "";
    const uf = est.estado?.sigla || "";
    const estadoNome = est.estado?.nome || "";
    const cnae = est.atividade_principal ? `${est.atividade_principal.id || est.atividade_principal.subclasse || ""} - ${est.atividade_principal.descricao || ""}` : "N\xE3o informado";
    const phones = [];
    if (est.ddd1 && est.telefone1) phones.push(`(${est.ddd1}) ${est.telefone1}`);
    if (est.ddd2 && est.telefone2) phones.push(`(${est.ddd2}) ${est.telefone2}`);
    if (est.ddd_fax && est.fax) phones.push(`Fax: (${est.ddd_fax}) ${est.fax}`);
    const email = est.email ? est.email.toLowerCase() : null;
    const inscricoes = Array.isArray(est.inscricoes_estaduais) ? est.inscricoes_estaduais : [];
    return {
      cnpjFormatted,
      razaoSocial,
      nomeFantasia,
      situacao,
      dataSituacao,
      tipoUnidade,
      enderecoLinha1: `${logradouroParts}${numero}${complemento}` || "Logradouro n\xE3o informado",
      bairro,
      cep,
      cidadeUf: [cidade, uf].filter(Boolean).join(" / ") || "N\xE3o informado",
      estadoNome,
      cnae,
      phones,
      email,
      inscricoes,
      capitalSocial: formatCurrencyBRL(companyData.capital_social),
      porte: companyData.porte?.descricao || "N\xE3o informado",
      naturezaJuridica: companyData.natureza_juridica ? `${companyData.natureza_juridica.id} - ${companyData.natureza_juridica.descricao}` : "N\xE3o informado",
      inicioAtividade: est.data_inicio_atividade ? formatDateString(est.data_inicio_atividade) : "N\xE3o informado"
    };
  }, [companyData]);
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-slate-100 text-slate-900 font-sans pb-16" }, /* @__PURE__ */ React.createElement("header", { className: "bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg border-b border-indigo-900/50" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start sm:items-center gap-3.5" }, /* @__PURE__ */ React.createElement("div", { className: "p-3 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 shrink-0" }, /* @__PURE__ */ React.createElement(Icons.Building, { className: "w-7 h-7" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("h1", { className: "text-xl sm:text-2xl font-extrabold tracking-tight" }, "Consulta P\xFAblica de CNPJ"), /* @__PURE__ */ React.createElement("span", { className: "hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/20 text-indigo-200 border border-indigo-400/30" }, "publica.cnpj.ws")), /* @__PURE__ */ React.createElement("p", { className: "text-slate-300 text-xs sm:text-sm mt-1" }, "Explorador completo de dados cadastrais, quadro societ\xE1rio, CNAEs e inscri\xE7\xF5es estaduais em tempo real."))), companyData && /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 self-start md:self-auto bg-white/5 border border-white/10 rounded-xl px-4 py-2.5" }, /* @__PURE__ */ React.createElement(Icons.Database, { className: "w-5 h-5 text-indigo-400" }), /* @__PURE__ */ React.createElement("div", { className: "text-xs" }, /* @__PURE__ */ React.createElement("div", { className: "text-slate-300" }, "Campos preenchidos na resposta"), /* @__PURE__ */ React.createElement("div", { className: "font-bold text-white text-sm" }, stats.filled, " ", /* @__PURE__ */ React.createElement("span", { className: "text-slate-400 font-normal" }, "de ", stats.total, " campos totais"))))), /* @__PURE__ */ React.createElement("form", { onSubmit: handleFormSubmit, className: "mt-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-row gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "relative flex-1" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400" }, /* @__PURE__ */ React.createElement(Icons.Search, { className: "w-5 h-5" })), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: cnpjInput,
      onChange: handleInputChange,
      placeholder: "00.000.000/0000-00",
      maxLength: 18,
      className: "w-full pl-11 pr-24 py-3.5 bg-white text-slate-900 rounded-xl font-mono text-base sm:text-lg font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/40 shadow-sm"
    }
  ), cnpjInput && /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => setCnpjInput(""),
      className: "absolute inset-y-0 right-3 my-auto h-7 px-2 text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
    },
    "Limpar"
  )), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "submit",
      disabled: loading,
      className: "inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed shadow-md transition-all shrink-0 cursor-pointer"
    },
    loading ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icons.Spinner, { className: "w-5 h-5" }), /* @__PURE__ */ React.createElement("span", null, "Consultando...")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icons.Search, { className: "w-5 h-5" }), /* @__PURE__ */ React.createElement("span", null, "Consultar CNPJ"))
  )), /* @__PURE__ */ React.createElement("div", { className: "mt-3 flex items-center gap-2 flex-wrap text-xs text-slate-300" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-1 text-indigo-300 font-medium" }, /* @__PURE__ */ React.createElement(Icons.Sparkles, { className: "w-3.5 h-3.5" }), " Testar com exemplos:"), sampleCnpjs.map((item) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: item.cnpj,
      type: "button",
      onClick: () => handleSelectSample(item.cnpj),
      disabled: loading,
      className: "px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors font-medium cursor-pointer disabled:opacity-50"
    },
    item.label
  )))))), /* @__PURE__ */ React.createElement("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-6" }, error && /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl bg-rose-50 border border-rose-200 p-4 sm:p-5 flex items-start gap-3.5 text-rose-900 shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "p-2 rounded-xl bg-rose-100 text-rose-600 shrink-0" }, /* @__PURE__ */ React.createElement(Icons.Alert, { className: "w-6 h-6" })), /* @__PURE__ */ React.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-base text-rose-950" }, error.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-rose-700 mt-0.5" }, error.message)), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => setError(null),
      className: "text-xs font-semibold text-rose-600 hover:text-rose-800 px-2.5 py-1 rounded-lg hover:bg-rose-100"
    },
    "Fechar"
  )), loading && /* @__PURE__ */ React.createElement("div", { className: "space-y-6 animate-pulse" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "h-7 bg-slate-200 rounded-lg w-2/3" }), /* @__PURE__ */ React.createElement("div", { className: "h-4 bg-slate-200 rounded w-1/3" }), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 pt-4" }, /* @__PURE__ */ React.createElement("div", { className: "h-28 bg-slate-100 rounded-xl" }), /* @__PURE__ */ React.createElement("div", { className: "h-28 bg-slate-100 rounded-xl" }), /* @__PURE__ */ React.createElement("div", { className: "h-28 bg-slate-100 rounded-xl" })))), !loading && !companyData && !error && /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl border border-slate-200 p-10 text-center shadow-sm" }, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4" }, /* @__PURE__ */ React.createElement(Icons.Building, { className: "w-8 h-8" })), /* @__PURE__ */ React.createElement("h2", { className: "text-lg font-bold text-slate-800" }, "Pronto para consultar qualquer CNPJ"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-slate-500 max-w-md mx-auto mt-1" }, "Digite um CNPJ v\xE1lido no campo acima ou clique em um dos exemplos r\xE1pidos para visualizar o resumo executivo e todos os campos din\xE2micos da API.")), !loading && companyData && summary && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 flex-wrap" }, /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200" }, /* @__PURE__ */ React.createElement(Icons.Database, { className: "w-4 h-4" }), stats.filled, " campos preenchidos"), /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 text-slate-600" }, stats.empty, " campos vazios/nulos"), companyData.atualizado_em && /* @__PURE__ */ React.createElement("span", { className: "text-xs text-slate-500" }, "Base atualizada em: ", /* @__PURE__ */ React.createElement("strong", { className: "text-slate-700" }, formatDateString(companyData.atualizado_em)))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2.5 flex-wrap" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => setShowRawJson(!showRawJson),
      className: `inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${showRawJson ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`
    },
    /* @__PURE__ */ React.createElement(Icons.Code, { className: "w-4 h-4" }),
    showRawJson ? "Ocultar JSON Bruto" : "Ver JSON Bruto"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: handleCopyJson,
      className: "inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm cursor-pointer"
    },
    copiedJson ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icons.Check, { className: "w-4 h-4" }), /* @__PURE__ */ React.createElement("span", null, "JSON Copiado!")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icons.Copy, { className: "w-4 h-4" }), /* @__PURE__ */ React.createElement("span", null, "Copiar JSON"))
  ))), showRawJson && /* @__PURE__ */ React.createElement("div", { className: "bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-lg overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-xs font-mono text-slate-400" }, /* @__PURE__ */ React.createElement(Icons.Code, { className: "w-4 h-4 text-indigo-400" }), /* @__PURE__ */ React.createElement("span", null, "Resposta original de https://publica.cnpj.ws/cnpj/", String(companyData.estabelecimento?.cnpj || "").replace(/\D/g, ""))), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: handleCopyJson,
      className: "text-xs font-semibold text-indigo-300 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10"
    },
    copiedJson ? /* @__PURE__ */ React.createElement(Icons.Check, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ React.createElement(Icons.Copy, { className: "w-3.5 h-3.5" }),
    copiedJson ? "Copiado" : "Copiar"
  )), /* @__PURE__ */ React.createElement("pre", { className: "p-4 text-xs font-mono overflow-x-auto max-h-96 leading-relaxed text-emerald-300" }, JSON.stringify(companyData, null, 2))), /* @__PURE__ */ React.createElement("section", { className: "bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "p-5 sm:p-6 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2.5 flex-wrap" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-sm font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-lg" }, summary.cnpjFormatted), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => handleCopyCnpj(summary.cnpjFormatted),
      className: "inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-indigo-600 px-2 py-1 rounded hover:bg-slate-100 transition-colors cursor-pointer",
      title: "Copiar CNPJ formatado"
    },
    copiedCnpj ? /* @__PURE__ */ React.createElement(Icons.Check, { className: "w-3.5 h-3.5 text-emerald-600" }) : /* @__PURE__ */ React.createElement(Icons.Copy, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ React.createElement("span", null, copiedCnpj ? "Copiado" : "Copiar")
  ), summary.tipoUnidade && /* @__PURE__ */ React.createElement("span", { className: "px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-slate-200 text-slate-700" }, summary.tipoUnidade)), /* @__PURE__ */ React.createElement("h2", { className: "text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight" }, summary.razaoSocial), /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium text-slate-500" }, "Nome Fantasia: ", /* @__PURE__ */ React.createElement("span", { className: "text-slate-800 font-semibold" }, summary.nomeFantasia))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:items-end justify-center shrink-0" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-extrabold uppercase tracking-wider border ${summary.situacao.toLowerCase().includes("ativa") ? "bg-emerald-50 text-emerald-800 border-emerald-300" : "bg-amber-50 text-amber-800 border-amber-300"}`
    },
    /* @__PURE__ */ React.createElement(
      "span",
      {
        className: `w-2.5 h-2.5 rounded-full ${summary.situacao.toLowerCase().includes("ativa") ? "bg-emerald-500" : "bg-amber-500"}`
      }
    ),
    "Situa\xE7\xE3o: ",
    summary.situacao
  ), summary.dataSituacao && /* @__PURE__ */ React.createElement("span", { className: "text-xs text-slate-400 mt-1" }, "Desde ", summary.dataSituacao))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-4 border-t border-slate-200/80 text-xs" }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-50 rounded-xl p-3 border border-slate-200/60" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-400 block" }, "Capital Social"), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-bold text-emerald-700 mt-0.5 block" }, summary.capitalSocial)), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-50 rounded-xl p-3 border border-slate-200/60" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-400 block" }, "Porte / In\xEDcio de Atividade"), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-bold text-slate-800 mt-0.5 block" }, summary.porte, " \u2022 ", summary.inicioAtividade)), /* @__PURE__ */ React.createElement("div", { className: "bg-slate-50 rounded-xl p-3 border border-slate-200/60" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-400 block" }, "Natureza Jur\xEDdica"), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-bold text-slate-800 mt-0.5 block truncate", title: summary.naturezaJuridica }, summary.naturezaJuridica)))), /* @__PURE__ */ React.createElement("div", { className: "p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-5" }, /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-slate-200 p-4 bg-slate-50/40 flex flex-col justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-2" }, /* @__PURE__ */ React.createElement(Icons.Briefcase, { className: "w-4 h-4" }), /* @__PURE__ */ React.createElement("span", null, "Atividade Econ\xF4mica Principal (CNAE)")), /* @__PURE__ */ React.createElement("p", { className: "text-sm sm:text-base font-bold text-slate-800 leading-snug" }, summary.cnae)), companyData.estabelecimento?.atividades_secundarias?.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mt-3 pt-2.5 border-t border-slate-200/80 text-xs text-slate-500" }, "+ ", companyData.estabelecimento.atividades_secundarias.length, " atividade(s) secund\xE1ria(s) listada(s) abaixo")), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-slate-200 p-4 bg-slate-50/40" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-2" }, /* @__PURE__ */ React.createElement(Icons.MapPin, { className: "w-4 h-4" }), /* @__PURE__ */ React.createElement("span", null, "Endere\xE7o & Localiza\xE7\xE3o")), /* @__PURE__ */ React.createElement("p", { className: "text-sm font-bold text-slate-800" }, summary.enderecoLinha1), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-slate-600 mt-1" }, summary.bairro ? `Bairro: ${summary.bairro} \u2022 ` : "", "CEP: ", /* @__PURE__ */ React.createElement("span", { className: "font-mono font-semibold text-slate-800" }, summary.cep)), /* @__PURE__ */ React.createElement("div", { className: "mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-900 text-xs font-bold" }, /* @__PURE__ */ React.createElement("span", null, "Cidade/UF: ", summary.cidadeUf), summary.estadoNome && /* @__PURE__ */ React.createElement("span", { className: "font-normal text-indigo-700" }, "(", summary.estadoNome, ")"))), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-slate-200 p-4 bg-slate-50/40 space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider" }, /* @__PURE__ */ React.createElement(Icons.Phone, { className: "w-4 h-4" }), /* @__PURE__ */ React.createElement("span", null, "Canais de Contato")), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 text-sm" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-400 text-xs w-16 shrink-0 pt-0.5" }, "Telefone:"), summary.phones.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5" }, summary.phones.map((ph, i) => /* @__PURE__ */ React.createElement(
    "span",
    {
      key: i,
      className: "font-mono text-xs font-semibold bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-800"
    },
    ph
  ))) : /* @__PURE__ */ React.createElement("span", { className: "text-slate-400 italic text-xs" }, "N\xE3o informado")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-slate-400 text-xs w-16 shrink-0" }, "E-mail:"), summary.email ? /* @__PURE__ */ React.createElement(
    "a",
    {
      href: `mailto:${summary.email}`,
      className: "text-indigo-600 hover:text-indigo-800 font-semibold underline break-all text-xs sm:text-sm"
    },
    summary.email
  ) : /* @__PURE__ */ React.createElement("span", { className: "text-slate-400 italic text-xs" }, "N\xE3o informado")))), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl border border-slate-200 p-4 bg-slate-50/40" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-2 mb-2.5" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider" }, /* @__PURE__ */ React.createElement(Icons.BadgeCheck, { className: "w-4 h-4" }), /* @__PURE__ */ React.createElement("span", null, "Inscri\xE7\xF5es Estaduais")), /* @__PURE__ */ React.createElement("span", { className: "text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700" }, summary.inscricoes.length)), summary.inscricoes.length === 0 ? /* @__PURE__ */ React.createElement("p", { className: "text-xs text-slate-400 italic py-2" }, "Nenhuma inscri\xE7\xE3o estadual vinculada a este estabelecimento.") : /* @__PURE__ */ React.createElement("div", { className: "space-y-2 max-h-40 overflow-y-auto pr-1" }, summary.inscricoes.map((ie, idx) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: idx,
      className: "flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 text-xs"
    },
    /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "font-mono font-bold text-slate-900 text-sm" }, ie.inscricao_estadual), /* @__PURE__ */ React.createElement("span", { className: "ml-2 px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold" }, ie.estado?.sigla || ie.estado?.nome || "UF")),
    /* @__PURE__ */ React.createElement(
      "span",
      {
        className: `px-2 py-0.5 rounded-full font-bold ${ie.ativo ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`
      },
      ie.ativo ? "Ativa" : "Inativa"
    )
  )))))), /* @__PURE__ */ React.createElement("section", { className: "bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "p-5 sm:p-6 border-b border-slate-200 bg-slate-50/50 flex flex-col lg:flex-row lg:items-center justify-between gap-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-extrabold text-slate-900 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Icons.Database, { className: "w-5 h-5 text-indigo-600" }), /* @__PURE__ */ React.createElement("span", null, "Explorador Din\xE2mico Completo da API")), /* @__PURE__ */ React.createElement("p", { className: "text-xs sm:text-sm text-slate-500 mt-0.5" }, "Renderiza\xE7\xE3o autom\xE1tica e recursiva de 100% das propriedades, objetos e listas retornadas no JSON para este CNPJ.")), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5" }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: searchTerm,
      onChange: (e) => setSearchTerm(e.target.value),
      placeholder: "Filtrar campo ou valor...",
      className: "w-full sm:w-64 pl-3.5 pr-8 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
    }
  ), searchTerm && /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => setSearchTerm(""),
      className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
    },
    "\u2715"
  )), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => setExpandSignal((prev) => prev <= 0 ? 1 : prev + 1),
      className: "px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
    },
    "Expandir Tudo"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => setExpandSignal((prev) => prev >= 0 ? -1 : prev - 1),
      className: "px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
    },
    "Recolher Tudo"
  )))), /* @__PURE__ */ React.createElement("div", { className: "p-4 sm:p-6 space-y-4" }, Object.keys(filteredCompanyData).length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-8 text-slate-400 text-sm" }, "Nenhum campo ou valor encontrado para o filtro ", /* @__PURE__ */ React.createElement("strong", null, '"', searchTerm, '"'), ".") : Object.entries(filteredCompanyData).map(([key, val]) => /* @__PURE__ */ React.createElement(
    DynamicJsonNode,
    {
      key,
      nodeKey: key,
      value: val,
      depth: 0,
      expandSignal
    }
  )))))));
}
window.CnpjApp = App;
function initCnpjApp() {
  const rootEl = document.getElementById("cnpj-app-root");
  if (rootEl && window.ReactDOM && window.React) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(React.createElement(App));
  }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCnpjApp);
} else {
  initCnpjApp();
}
