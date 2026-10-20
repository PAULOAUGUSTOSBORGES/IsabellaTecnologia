import React, { useState, useMemo } from 'react';

const Icons = {
  Search: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z" />
    </svg>
  ),
  Building: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  MapPin: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Phone: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  Mail: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Briefcase: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Copy: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  Check: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Code: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  ChevronDown: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  ),
  ChevronRight: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  ),
  Alert: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  Spinner: ({ className = "w-5 h-5" }) => (
    <svg className={`animate-spin ${className}`} fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  ),
  BadgeCheck: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  Database: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  Sparkles: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
};

const applyCnpjMask = (value) => {
  const digits = String(value || '').replace(/\D/g, '').slice(0, 14);
  return digits
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');
};

const applyCepMask = (value) => {
  const digits = String(value || '').replace(/\D/g, '');
  if (digits.length === 8) {
    return digits.replace(/^(\d{5})(\d{3})$/, '$1-$2');
  }
  return value;
};

const formatCurrencyBRL = (value) => {
  if (value === null || value === undefined || value === '') return 'Não informado';
  const num = typeof value === 'number' ? value : parseFloat(String(value).replace(',', '.'));
  if (isNaN(num)) return String(value);
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);
};

const formatDateString = (val) => {
  if (typeof val !== 'string') return val;
  // Data simples YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
    const [year, month, day] = val.split('-');
    return `${day}/${month}/${year}`;
  }
  // Data ISO completa YYYY-MM-DDTHH:mm:ss...
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(val)) {
    const date = new Date(val);
    if (!isNaN(date.getTime())) {
      return date.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  }
  return val;
};

const prettifyKey = (key) => {
  if (!key) return '';
  const dictionary = {
    cnpj: 'CNPJ',
    cnpj_raiz: 'CNPJ Raiz',
    cnpj_ordem: 'CNPJ Ordem',
    cnpj_digito_verificador: 'Dígito Verificador',
    razao_social: 'Razão Social',
    nome_fantasia: 'Nome Fantasia',
    capital_social: 'Capital Social',
    atualizado_em: 'Atualizado em',
    inscricoes_estaduais: 'Inscrições Estaduais',
    inscricao_estadual: 'Inscrição Estadual',
    atividade_principal: 'Atividade Principal (CNAE)',
    atividades_secundarias: 'Atividades Secundárias',
    natureza_juridica: 'Natureza Jurídica',
    qualificacao_do_responsavel: 'Qualificação do Responsável',
    qualificacao_socio: 'Qualificação do Sócio',
    qualificacao_representante: 'Qualificação do Representante',
    situacao_cadastral: 'Situação Cadastral',
    data_situacao_cadastral: 'Data da Situação Cadastral',
    motivo_situacao_cadastral: 'Motivo da Situação Cadastral',
    data_inicio_atividade: 'Data de Início da Atividade',
    data_entrada: 'Data de Entrada',
    data_exclusao_do_simples: 'Data de Exclusão do Simples',
    data_opcao_pelo_simples: 'Data de Opção pelo Simples',
    data_opcao_pelo_mei: 'Data de Opção pelo MEI',
    data_exclusao_do_mei: 'Data de Exclusão do MEI',
    cpf_cnpj_socio: 'CPF/CNPJ do Sócio',
    cpf_representante_legal: 'CPF do Representante Legal',
    faixa_etaria: 'Faixa Etária',
    uf: 'UF',
    cep: 'CEP',
    ddd1: 'DDD 1',
    ddd2: 'DDD 2',
    ddd_fax: 'DDD Fax',
    ibge_id: 'Código IBGE',
    siafi_id: 'Código SIAFI',
    id_pais: 'ID do País',
    iso2: 'Sigla ISO2',
    iso3: 'Sigla ISO3',
    comex_id: 'ID Comex',
    simples: 'Simples Nacional / MEI',
    mei: 'Optante pelo MEI',
    socios: 'Quadro Societário (QSA)',
    estabelecimento: 'Dados do Estabelecimento',
    regimes_tributarios: 'Regimes Tributários',
    suframa: 'Inscrições SUFRAMA'
  };

  const lower = String(key).toLowerCase();
  if (dictionary[lower]) return dictionary[lower];

  return String(key)
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const countObjStats = (node) => {
  let total = 0;
  let filled = 0;

  const traverse = (current) => {
    if (current === null || current === undefined) {
      total += 1;
      return;
    }
    if (typeof current !== 'object') {
      total += 1;
      if (String(current).trim() !== '') {
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
  const keyLower = String(fieldKey || '').toLowerCase();

  if (value === null || value === undefined || value === '') {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-400 italic">
        Não informado
      </span>
    );
  }

  if (typeof value === 'boolean') {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
          value
            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
            : 'bg-rose-50 text-rose-700 border-rose-200'
        }`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${value ? 'bg-emerald-500' : 'bg-rose-500'}`} />
        {value ? 'Sim (Ativo)' : 'Não'}
      </span>
    );
  }

  const strVal = String(value).trim();

  // Booleans representados como "Sim" / "Não" na API cnpj.ws
  if (strVal.toLowerCase() === 'sim' || strVal.toLowerCase() === 'não' || strVal.toLowerCase() === 'nao') {
    const isYes = strVal.toLowerCase() === 'sim';
    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
          isYes
            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
            : 'bg-slate-100 text-slate-700 border-slate-200'
        }`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${isYes ? 'bg-emerald-500' : 'bg-slate-400'}`} />
        {isYes ? 'Sim' : 'Não'}
      </span>
    );
  }

  // Capital Social
  if (keyLower.includes('capital_social')) {
    return (
      <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
        {formatCurrencyBRL(value)}
      </span>
    );
  }

  // CNPJ completo (14 dígitos)
  if ((keyLower.includes('cnpj') && !keyLower.includes('raiz') && !keyLower.includes('ordem') && !keyLower.includes('digito')) && /^\d{14}$/.test(strVal.replace(/\D/g, ''))) {
    return (
      <span className="font-mono font-medium text-indigo-950 bg-indigo-50/80 px-2 py-0.5 rounded border border-indigo-100">
        {applyCnpjMask(strVal)}
      </span>
    );
  }

  // CEP (8 dígitos)
  if (keyLower === 'cep' || (keyLower.includes('cep') && /^\d{8}$/.test(strVal.replace(/\D/g, '')))) {
    return (
      <span className="font-mono font-medium text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
        {applyCepMask(strVal)}
      </span>
    );
  }

  // Datas ISO ou YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}/.test(strVal)) {
    return (
      <span className="font-medium text-slate-800 bg-amber-50/70 border border-amber-200/70 px-2 py-0.5 rounded text-xs sm:text-sm">
        {formatDateString(strVal)}
      </span>
    );
  }

  // Situação Cadastral
  if (keyLower === 'situacao_cadastral') {
    const isAtiva = strVal.toLowerCase().includes('ativa');
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${
          isAtiva
            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
            : 'bg-amber-100 text-amber-800 border border-amber-300'
        }`}
      >
        {strVal}
      </span>
    );
  }

  // E-mails
  if (keyLower.includes('email') && strVal.includes('@')) {
    return (
      <a
        href={`mailto:${strVal.toLowerCase()}`}
        className="text-indigo-600 hover:text-indigo-800 underline break-all font-medium"
      >
        {strVal.toLowerCase()}
      </a>
    );
  }

  return <span className="text-slate-800 font-medium break-words">{strVal}</span>;
};

const DynamicJsonNode = ({ nodeKey, value, depth = 0, expandSignal = 0 }) => {
  const [isOpen, setIsOpen] = useState(depth < 2);

  React.useEffect(() => {
    if (expandSignal > 0) setIsOpen(true);
    if (expandSignal < 0) setIsOpen(false);
  }, [expandSignal]);

  const isObject = value !== null && typeof value === 'object' && !Array.isArray(value);
  const isArray = Array.isArray(value);

  // Caso seja valor primitivo ou null
  if (!isObject && !isArray) {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2.5 px-3.5 rounded-lg bg-white border border-slate-200/80 hover:border-indigo-200 transition-colors gap-1 sm:gap-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
          <span>{prettifyKey(nodeKey)}</span>
          <span className="text-[11px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
            {nodeKey}
          </span>
        </div>
        <div className="text-sm sm:text-right">
          <SmartFormattedValue fieldKey={nodeKey} value={value} />
        </div>
      </div>
    );
  }

  // Caso seja Lista (Array)
  if (isArray) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50/60 overflow-hidden transition-all">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-slate-100/80 hover:bg-slate-200/60 transition-colors text-left"
        >
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-slate-600">
              {isOpen ? <Icons.ChevronDown /> : <Icons.ChevronRight />}
            </span>
            <span className="font-semibold text-slate-800 text-sm sm:text-base">
              {prettifyKey(nodeKey)}
            </span>
            <span className="text-xs font-mono text-slate-400">({nodeKey})</span>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
            {value.length} {value.length === 1 ? 'registro' : 'registros'}
          </span>
        </button>

        {isOpen && (
          <div className="p-3 sm:p-4 space-y-3">
            {value.length === 0 ? (
              <div className="text-xs text-slate-400 italic py-2 px-3 bg-white rounded-lg border border-dashed border-slate-200">
                Lista vazia (nenhum registro retornado pela API)
              </div>
            ) : (
              value.map((item, idx) => {
                const isItemObj = item !== null && typeof item === 'object';
                if (!isItemObj) {
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2 px-3 bg-white rounded-lg border border-slate-200"
                    >
                      <span className="text-xs font-mono text-slate-400">#{idx + 1}</span>
                      <SmartFormattedValue fieldKey={nodeKey} value={item} />
                    </div>
                  );
                }

                // Tenta achar um título amigável para o card do item da lista
                const itemTitle =
                  item.nome ||
                  item.descricao ||
                  item.inscricao_estadual ||
                  item.razao_social ||
                  item.regime_tributario ||
                  `Item #${idx + 1}`;

                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                  >
                    <div className="px-3.5 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 truncate">
                        { idx + 1 }. {itemTitle}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 shrink-0">
                        Índice [{idx}]
                      </span>
                    </div>
                    <div className="p-3 space-y-2">
                      {Object.entries(item).map(([subKey, subVal]) => (
                        <DynamicJsonNode
                          key={subKey}
                          nodeKey={subKey}
                          value={subVal}
                          depth={depth + 1}
                          expandSignal={expandSignal}
                        />
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    );
  }

  // Caso seja Objeto aninhado
  const entries = Object.entries(value);
  const primitives = entries.filter(
    ([, v]) => v === null || typeof v !== 'object'
  );
  const complexes = entries.filter(
    ([, v]) => v !== null && typeof v === 'object'
  );

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100/80 transition-colors text-left border-b border-slate-200/80"
      >
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-indigo-600">
            {isOpen ? <Icons.ChevronDown /> : <Icons.ChevronRight />}
          </span>
          <span className="font-bold text-slate-800 text-sm sm:text-base">
            {prettifyKey(nodeKey)}
          </span>
          <span className="text-xs font-mono text-slate-400">({nodeKey})</span>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-200/80 text-slate-700">
          {entries.length} {entries.length === 1 ? 'campo' : 'campos'}
        </span>
      </button>

      {isOpen && (
        <div className="p-3 sm:p-4 space-y-3 bg-slate-50/30">
          {primitives.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {primitives.map(([k, v]) => (
                <DynamicJsonNode
                  key={k}
                  nodeKey={k}
                  value={v}
                  depth={depth + 1}
                  expandSignal={expandSignal}
                />
              ))}
            </div>
          )}

          {complexes.length > 0 && (
            <div className="space-y-3 pt-1">
              {complexes.map(([k, v]) => (
                <DynamicJsonNode
                  key={k}
                  nodeKey={k}
                  value={v}
                  depth={depth + 1}
                  expandSignal={expandSignal}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [cnpjInput, setCnpjInput] = useState('00.000.000/0001-91');
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showRawJson, setShowRawJson] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [copiedCnpj, setCopiedCnpj] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandSignal, setExpandSignal] = useState(0);

  const sampleCnpjs = [
    { label: 'Banco do Brasil', cnpj: '00000000000191' },
    { label: 'Petrobras', cnpj: '33000167000101' },
    { label: 'Magazine Luiza', cnpj: '47960950000121' },
    { label: 'Vale S.A.', cnpj: '33592510000154' }
  ];

  const handleInputChange = (e) => {
    setCnpjInput(applyCnpjMask(e.target.value));
    if (error) setError(null);
  };

  const fetchCnpjData = async (rawCnpjToFetch) => {
    const cleanCnpj = String(rawCnpjToFetch ?? cnpjInput).replace(/\D/g, '');

    if (cleanCnpj.length !== 14) {
      setError({
        title: 'CNPJ Inválido',
        message: 'Digite os 14 dígitos numéricos do CNPJ para realizar a consulta.'
      });
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://publica.cnpj.ws/cnpj/${cleanCnpj}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        let apiMsg = '';
        try {
          const errJson = await response.json();
          apiMsg = errJson?.detalhes || errJson?.mensagem || errJson?.message || '';
        } catch {
          // ignore parse error
        }

        if (response.status === 404) {
          throw new Error(apiMsg || 'CNPJ não encontrado na base de dados pública.');
        }
        if (response.status === 429) {
          throw new Error(
            apiMsg ||
              'Limite de requisições excedido (A API pública permite até 3 consultas por minuto). Aguarde alguns segundos e tente novamente.'
          );
        }
        if (response.status === 400) {
          throw new Error(apiMsg || 'Formato de CNPJ inválido rejeitado pelo servidor.');
        }
        throw new Error(apiMsg || `Erro HTTP ${response.status} ao consultar a API.`);
      }

      const data = await response.json();
      setCompanyData(data);
      setExpandSignal(0);
    } catch (err) {
      setError({
        title: 'Falha na Consulta',
        message: err.message || 'Não foi possível conectar ao servidor https://publica.cnpj.ws.'
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
      // Fallback
    }
  };

  const handleCopyCnpj = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCnpj(true);
      setTimeout(() => setCopiedCnpj(false), 2000);
    } catch {
      // Fallback
    }
  };

  const stats = useMemo(() => {
    if (!companyData) return { total: 0, filled: 0, empty: 0 };
    return countObjStats(companyData);
  }, [companyData]);

  const filteredCompanyData = useMemo(() => {
    if (!companyData || !searchTerm.trim()) return companyData;
    const term = searchTerm.toLowerCase().trim();

    const filterNode = (node, currentKey = '') => {
      const keyMatches =
        currentKey.toLowerCase().includes(term) ||
        prettifyKey(currentKey).toLowerCase().includes(term);

      if (node === null || node === undefined) {
        return keyMatches ? node : undefined;
      }

      if (typeof node !== 'object') {
        const valMatches = String(node).toLowerCase().includes(term);
        return keyMatches || valMatches ? node : undefined;
      }

      if (Array.isArray(node)) {
        if (keyMatches) return node;
        const filteredArr = node
          .map((item) => filterNode(item, ''))
          .filter((item) => item !== undefined);
        return filteredArr.length > 0 ? filteredArr : undefined;
      }

      if (keyMatches) return node;

      const filteredObj = {};
      let hasMatch = false;
      for (const [k, v] of Object.entries(node)) {
        const res = filterNode(v, k);
        if (res !== undefined) {
          filteredObj[k] = res;
          hasMatch = true;
        }
      }
      return hasMatch ? filteredObj : undefined;
    };

    return filterNode(companyData) || {};
  }, [companyData, searchTerm]);

  const summary = useMemo(() => {
    if (!companyData) return null;
    const est = companyData.estabelecimento || {};

    const cnpjFormatted = applyCnpjMask(est.cnpj || companyData.cnpj_raiz || '');
    const razaoSocial = companyData.razao_social || 'Não informado';
    const nomeFantasia = est.nome_fantasia || 'Não possui nome fantasia registrado';
    const situacao = est.situacao_cadastral || 'Não informada';
    const dataSituacao = est.data_situacao_cadastral ? formatDateString(est.data_situacao_cadastral) : null;
    const tipoUnidade = est.tipo || '';

    // Endereço
    const logradouroParts = [est.tipo_logradouro, est.logradouro].filter(Boolean).join(' ');
    const numero = est.numero ? `, ${est.numero}` : '';
    const complemento = est.complemento ? ` - ${est.complemento}` : '';
    const bairro = est.bairro ? `${est.bairro}` : '';
    const cep = est.cep ? applyCepMask(est.cep) : 'Não informado';
    const cidade = est.cidade?.nome || '';
    const uf = est.estado?.sigla || '';
    const estadoNome = est.estado?.nome || '';

    // CNAE Principal
    const cnae = est.atividade_principal
      ? `${est.atividade_principal.id || est.atividade_principal.subclasse || ''} - ${est.atividade_principal.descricao || ''}`
      : 'Não informado';

    // Telefones
    const phones = [];
    if (est.ddd1 && est.telefone1) phones.push(`(${est.ddd1}) ${est.telefone1}`);
    if (est.ddd2 && est.telefone2) phones.push(`(${est.ddd2}) ${est.telefone2}`);
    if (est.ddd_fax && est.fax) phones.push(`Fax: (${est.ddd_fax}) ${est.fax}`);

    // Email
    const email = est.email ? est.email.toLowerCase() : null;

    // Inscrições Estaduais
    const inscricoes = Array.isArray(est.inscricoes_estaduais) ? est.inscricoes_estaduais : [];

    return {
      cnpjFormatted,
      razaoSocial,
      nomeFantasia,
      situacao,
      dataSituacao,
      tipoUnidade,
      enderecoLinha1: `${logradouroParts}${numero}${complemento}` || 'Logradouro não informado',
      bairro,
      cep,
      cidadeUf: [cidade, uf].filter(Boolean).join(' / ') || 'Não informado',
      estadoNome,
      cnae,
      phones,
      email,
      inscricoes,
      capitalSocial: formatCurrencyBRL(companyData.capital_social),
      porte: companyData.porte?.descricao || 'Não informado',
      naturezaJuridica: companyData.natureza_juridica
        ? `${companyData.natureza_juridica.id} - ${companyData.natureza_juridica.descricao}`
        : 'Não informado',
      inicioAtividade: est.data_inicio_atividade ? formatDateString(est.data_inicio_atividade) : 'Não informado'
    };
  }, [companyData]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans pb-16">
      {/* Top Header Banner */}
      <header className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg border-b border-indigo-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 shrink-0">
                <Icons.Building className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                    Consulta Pública de CNPJ
                  </h1>
                  <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/20 text-indigo-200 border border-indigo-400/30">
                    publica.cnpj.ws
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Explorador completo de dados cadastrais, quadro societário, CNAEs e inscrições estaduais em tempo real.
                </p>
              </div>
            </div>

            {companyData && (
              <div className="flex items-center gap-3 self-start md:self-auto bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                <Icons.Database className="w-5 h-5 text-indigo-400" />
                <div className="text-xs">
                  <div className="text-slate-300">Campos preenchidos na resposta</div>
                  <div className="font-bold text-white text-sm">
                    {stats.filled} <span className="text-slate-400 font-normal">de {stats.total} campos totais</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <form onSubmit={handleFormSubmit} className="mt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Icons.Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={cnpjInput}
                  onChange={handleInputChange}
                  placeholder="00.000.000/0000-00"
                  maxLength={18}
                  className="w-full pl-11 pr-24 py-3.5 bg-white text-slate-900 rounded-xl font-mono text-base sm:text-lg font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/40 shadow-sm"
                />
                {cnpjInput && (
                  <button
                    type="button"
                    onClick={() => setCnpjInput('')}
                    className="absolute inset-y-0 right-3 my-auto h-7 px-2 text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                  >
                    Limpar
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed shadow-md transition-all shrink-0 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Icons.Spinner className="w-5 h-5" />
                    <span>Consultando...</span>
                  </>
                ) : (
                  <>
                    <Icons.Search className="w-5 h-5" />
                    <span>Consultar CNPJ</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Sample Buttons */}
            <div className="mt-3 flex items-center gap-2 flex-wrap text-xs text-slate-300">
              <span className="flex items-center gap-1 text-indigo-300 font-medium">
                <Icons.Sparkles className="w-3.5 h-3.5" /> Testar com exemplos:
              </span>
              {sampleCnpjs.map((item) => (
                <button
                  key={item.cnpj}
                  type="button"
                  onClick={() => handleSelectSample(item.cnpj)}
                  disabled={loading}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors font-medium cursor-pointer disabled:opacity-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </form>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-6">
        {/* Error Alert */}
        {error && (
          <div className="rounded-2xl bg-rose-50 border border-rose-200 p-4 sm:p-5 flex items-start gap-3.5 text-rose-900 shadow-sm">
            <div className="p-2 rounded-xl bg-rose-100 text-rose-600 shrink-0">
              <Icons.Alert className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base text-rose-950">{error.title}</h3>
              <p className="text-sm text-rose-700 mt-0.5">{error.message}</p>
            </div>
            <button
              type="button"
              onClick={() => setError(null)}
              className="text-xs font-semibold text-rose-600 hover:text-rose-800 px-2.5 py-1 rounded-lg hover:bg-rose-100"
            >
              Fechar
            </button>
          </div>
        )}

        {/* Loading Skeleton */}
        {loading && (
          <div className="space-y-6 animate-pulse">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="h-7 bg-slate-200 rounded-lg w-2/3" />
              <div className="h-4 bg-slate-200 rounded w-1/3" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="h-28 bg-slate-100 rounded-xl" />
                <div className="h-28 bg-slate-100 rounded-xl" />
                <div className="h-28 bg-slate-100 rounded-xl" />
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !companyData && !error && (
          <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4">
              <Icons.Building className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">
              Pronto para consultar qualquer CNPJ
            </h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
              Digite um CNPJ válido no campo acima ou clique em um dos exemplos rápidos para visualizar o resumo executivo e todos os campos dinâmicos da API.
            </p>
          </div>
        )}

        {}
        {!loading && companyData && summary && (
          <>
            {/* Action & Stats Bar */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  <Icons.Database className="w-4 h-4" />
                  {stats.filled} campos preenchidos
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 text-slate-600">
                  {stats.empty} campos vazios/nulos
                </span>
                {companyData.atualizado_em && (
                  <span className="text-xs text-slate-500">
                    Base atualizada em: <strong className="text-slate-700">{formatDateString(companyData.atualizado_em)}</strong>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2.5 flex-wrap">
                <button
                  type="button"
                  onClick={() => setShowRawJson(!showRawJson)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    showRawJson
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <Icons.Code className="w-4 h-4" />
                  {showRawJson ? 'Ocultar JSON Bruto' : 'Ver JSON Bruto'}
                </button>

                <button
                  type="button"
                  onClick={handleCopyJson}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm cursor-pointer"
                >
                  {copiedJson ? (
                    <>
                      <Icons.Check className="w-4 h-4" />
                      <span>JSON Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Icons.Copy className="w-4 h-4" />
                      <span>Copiar JSON</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Raw JSON Viewer Collapsible */}
            {showRawJson && (
              <div className="bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-lg overflow-hidden">
                <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Icons.Code className="w-4 h-4 text-indigo-400" />
                    <span>Resposta original de https://publica.cnpj.ws/cnpj/{String(companyData.estabelecimento?.cnpj || '').replace(/\D/g, '')}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyJson}
                    className="text-xs font-semibold text-indigo-300 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10"
                  >
                    {copiedJson ? <Icons.Check className="w-3.5 h-3.5" /> : <Icons.Copy className="w-3.5 h-3.5" />}
                    {copiedJson ? 'Copiado' : 'Copiar'}
                  </button>
                </div>
                <pre className="p-4 text-xs font-mono overflow-x-auto max-h-96 leading-relaxed text-emerald-300">
                  {JSON.stringify(companyData, null, 2)}
                </pre>
              </div>
            )}

            {/* Executive Summary Section */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Top Company Identity Header */}
              <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-mono text-sm font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-lg">
                        {summary.cnpjFormatted}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopyCnpj(summary.cnpjFormatted)}
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-indigo-600 px-2 py-1 rounded hover:bg-slate-100 transition-colors cursor-pointer"
                        title="Copiar CNPJ formatado"
                      >
                        {copiedCnpj ? <Icons.Check className="w-3.5 h-3.5 text-emerald-600" /> : <Icons.Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCnpj ? 'Copiado' : 'Copiar'}</span>
                      </button>
                      {summary.tipoUnidade && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-slate-200 text-slate-700">
                          {summary.tipoUnidade}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                      {summary.razaoSocial}
                    </h2>

                    <p className="text-sm font-medium text-slate-500">
                      Nome Fantasia: <span className="text-slate-800 font-semibold">{summary.nomeFantasia}</span>
                    </p>
                  </div>

                  {/* Status Badge */}
                  <div className="flex flex-col sm:items-end justify-center shrink-0">
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-extrabold uppercase tracking-wider border ${
                        summary.situacao.toLowerCase().includes('ativa')
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          : 'bg-amber-50 text-amber-800 border-amber-300'
                      }`}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          summary.situacao.toLowerCase().includes('ativa') ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}
                      />
                      Situação: {summary.situacao}
                    </div>
                    {summary.dataSituacao && (
                      <span className="text-xs text-slate-400 mt-1">
                        Desde {summary.dataSituacao}
                      </span>
                    )}
                  </div>
                </div>

                {/* Quick Financial / Legal Sub-bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-4 border-t border-slate-200/80 text-xs">
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/60">
                    <span className="text-slate-400 block">Capital Social</span>
                    <span className="text-sm font-bold text-emerald-700 mt-0.5 block">
                      {summary.capitalSocial}
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/60">
                    <span className="text-slate-400 block">Porte / Início de Atividade</span>
                    <span className="text-sm font-bold text-slate-800 mt-0.5 block">
                      {summary.porte} • {summary.inicioAtividade}
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/60">
                    <span className="text-slate-400 block">Natureza Jurídica</span>
                    <span className="text-sm font-bold text-slate-800 mt-0.5 block truncate" title={summary.naturezaJuridica}>
                      {summary.naturezaJuridica}
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 Main Summary Cards Grid */}
              <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* CNAE Principal */}
                <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-2">
                      <Icons.Briefcase className="w-4 h-4" />
                      <span>Atividade Econômica Principal (CNAE)</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                      {summary.cnae}
                    </p>
                  </div>
                  {companyData.estabelecimento?.atividades_secundarias?.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-slate-200/80 text-xs text-slate-500">
                      + {companyData.estabelecimento.atividades_secundarias.length} atividade(s) secundária(s) listada(s) abaixo
                    </div>
                  )}
                </div>

                {/* Endereço e Cidade/UF */}
                <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/40">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-2">
                    <Icons.MapPin className="w-4 h-4" />
                    <span>Endereço & Localização</span>
                  </div>
                  <p className="text-sm font-bold text-slate-800">
                    {summary.enderecoLinha1}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {summary.bairro ? `Bairro: ${summary.bairro} • ` : ''}
                    CEP: <span className="font-mono font-semibold text-slate-800">{summary.cep}</span>
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-900 text-xs font-bold">
                    <span>Cidade/UF: {summary.cidadeUf}</span>
                    {summary.estadoNome && <span className="font-normal text-indigo-700">({summary.estadoNome})</span>}
                  </div>
                </div>

                {/* Contato: Telefone e E-mail */}
                <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/40 space-y-3">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider">
                    <Icons.Phone className="w-4 h-4" />
                    <span>Canais de Contato</span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-slate-400 text-xs w-16 shrink-0 pt-0.5">Telefone:</span>
                      {summary.phones.length > 0 ? (
                        <div className="flex flex-wrap gap-1.5">
                          {summary.phones.map((ph, i) => (
                            <span
                              key={i}
                              className="font-mono text-xs font-semibold bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-800"
                            >
                              {ph}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-slate-400 italic text-xs">Não informado</span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 text-xs w-16 shrink-0">E-mail:</span>
                      {summary.email ? (
                        <a
                          href={`mailto:${summary.email}`}
                          className="text-indigo-600 hover:text-indigo-800 font-semibold underline break-all text-xs sm:text-sm"
                        >
                          {summary.email}
                        </a>
                      ) : (
                        <span className="text-slate-400 italic text-xs">Não informado</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Inscrições Estaduais */}
                <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/40">
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider">
                      <Icons.BadgeCheck className="w-4 h-4" />
                      <span>Inscrições Estaduais</span>
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                      {summary.inscricoes.length}
                    </span>
                  </div>

                  {summary.inscricoes.length === 0 ? (
                    <p className="text-xs text-slate-400 italic py-2">
                      Nenhuma inscrição estadual vinculada a este estabelecimento.
                    </p>
                  ) : (
                    <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                      {summary.inscricoes.map((ie, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 text-xs"
                        >
                          <div>
                            <span className="font-mono font-bold text-slate-900 text-sm">
                              {ie.inscricao_estadual}
                            </span>
                            <span className="ml-2 px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
                              {ie.estado?.sigla || ie.estado?.nome || 'UF'}
                            </span>
                          </div>
                          <span
                            className={`px-2 py-0.5 rounded-full font-bold ${
                              ie.ativo
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {ie.ativo ? 'Ativa' : 'Inativa'}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50/50 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                    <Icons.Database className="w-5 h-5 text-indigo-600" />
                    <span>Explorador Dinâmico Completo da API</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Renderização automática e recursiva de 100% das propriedades, objetos e listas retornadas no JSON para este CNPJ.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Filtrar campo ou valor..."
                      className="w-full sm:w-64 pl-3.5 pr-8 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {searchTerm && (
                      <button
                        type="button"
                        onClick={() => setSearchTerm('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setExpandSignal((prev) => (prev <= 0 ? 1 : prev + 1))}
                      className="px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                    >
                      Expandir Tudo
                    </button>
                    <button
                      type="button"
                      onClick={() => setExpandSignal((prev) => (prev >= 0 ? -1 : prev - 1))}
                      className="px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                    >
                      Recolher Tudo
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                {Object.keys(filteredCompanyData).length === 0 ? (
                  <div className="text-center py-8 text-slate-400 text-sm">
                    Nenhum campo ou valor encontrado para o filtro <strong>"{searchTerm}"</strong>.
                  </div>
                ) : (
                  Object.entries(filteredCompanyData).map(([key, val]) => (
                    <DynamicJsonNode
                      key={key}
                      nodeKey={key}
                      value={val}
                      depth={0}
                      expandSignal={expandSignal}
                    />
                  ))
                )}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}