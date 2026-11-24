
import "./style.css";

const apex = {
  name: "APEX",
  fullName: "Advanced Performance & Execution Intelligence",
  classification: "VENOM PERFORMANCE INTELLIGENCE ENGINE",
  version: "1.0.0",
  status: "ONLINE",
  mission: "Measure. Analyze. Optimize. Perform.",

  metrics: [
    { label: "SYSTEM PERFORMANCE", value: 98.7, unit: "%" },
    { label: "EXECUTION EFFICIENCY", value: 94.2, unit: "%" },
    { label: "RESOURCE UTILIZATION", value: 82.6, unit: "%" },
    { label: "OPTIMIZATION INDEX", value: 96.4, unit: "%" }
  ],

  capabilities: [
    {
      id: "01",
      name: "PERFORMANCE INTELLIGENCE",
      description: "Measures operational performance across connected systems."
    },
    {
      id: "02",
      name: "OPTIMIZATION ENGINE",
      description: "Identifies inefficiencies and evaluates improvements."
    },
    {
      id: "03",
      name: "PREDICTIVE ANALYSIS",
      description: "Models potential outcomes and performance scenarios."
    },
    {
      id: "04",
      name: "RESOURCE ALLOCATION",
      description: "Evaluates resource utilization and operational capacity."
    },
    {
      id: "05",
      name: "EXECUTION MONITORING",
      description: "Tracks execution against defined performance targets."
    },
    {
      id: "06",
      name: "CONTINUOUS IMPROVEMENT",
      description: "Captures verified findings for future optimization."
    }
  ],

  integrations: [
    "ELEANOR",
    "ZEUS",
    "TITAN",
    "ARIES",
    "KRONOS",
    "OMEGA",
    "VCON"
  ],

  protocol: [
    "INGEST PERFORMANCE DATA",
    "ESTABLISH BASELINE",
    "IDENTIFY PERFORMANCE GAPS",
    "MODEL OPTIMIZATION OPTIONS",
    "SUBMIT RECOMMENDATIONS",
    "HUMAN APPROVAL",
    "MONITOR VERIFIED RESULTS"
  ]
};

function render() {
  document.querySelector("#app").innerHTML = `
    <main class="apex">

      <header class="topbar">
        <div class="brand">
          <div class="symbol">A</div>
          <div>
            <h2>VENOM <span>INTELLIGENCE</span></h2>
            <small>THE SHELBY PREDATOR ENTERPRISE</small>
          </div>
        </div>
        <div class="status">
          <span class="pulse"></span>
          ${apex.status}
        </div>
      </header>

      <section class="hero">
        <div class="eyebrow">
          ${apex.classification}
        </div>

        <h1>APEX<span>.</span></h1>

        <h2>${apex.fullName}</h2>

        <p>${apex.mission}</p>

        <div class="hero-line"></div>

        <div class="hero-meta">
          <span>ENGINE ${apex.version}</span>
          <span>PERFORMANCE DIVISION</span>
          <span>VENOM ARCHITECTURE</span>
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <div>
            <small>01 / PERFORMANCE TELEMETRY</small>
            <h2>ENGINE STATUS</h2>
          </div>
          <span class="live">LIVE DEMO DATA</span>
        </div>

        <div class="metrics">
          ${apex.metrics.map((m, i) => `
            <article class="metric">
              <small>${m.label}</small>
              <div class="metric-value">
                ${m.value}<span>${m.unit}</span>
              </div>
              <div class="bar">
                <div style="width:${m.value}%"></div>
              </div>
              <small class="metric-foot">DEMO BASELINE / ${String(i + 1).padStart(2, "0")}</small>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <div>
            <small>02 / CORE ARCHITECTURE</small>
            <h2>APEX CAPABILITIES</h2>
          </div>
        </div>

        <div class="capabilities">
          ${apex.capabilities.map(c => `
            <article class="capability">
              <span class="number">${c.id}</span>
              <div>
                <h3>${c.name}</h3>
                <p>${c.description}</p>
              </div>
              <span class="arrow">↗</span>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <div>
            <small>03 / CONNECTED INTELLIGENCE</small>
            <h2>VENOM NETWORK</h2>
          </div>
        </div>

        <div class="network">
          ${apex.integrations.map(name => `
            <div class="node">
              <span class="node-dot"></span>
              ${name}
            </div>
          `).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-heading">
          <div>
            <small>04 / EXECUTION FRAMEWORK</small>
            <h2>OPTIMIZATION PROTOCOL</h2>
          </div>
        </div>

        <div class="protocol">
          ${apex.protocol.map((step, i) => `
            <div class="protocol-step">
              <span>${String(i + 1).padStart(2, "0")}</span>
              <p>${step}</p>
              <span class="check">${i === 5 ? "◆" : "✓"}</span>
            </div>
          `).join("")}
        </div>
      </section>

      <footer>
        <div class="footer-logo">APEX<span>.</span></div>
        <p>THE PURSUIT OF PERFORMANCE IS NEVER FINISHED.</p>
        <small>SHELBY PREDATOR ENTERPRISE / VENOM SYSTEMS</small>
      </footer>

    </main>
  `;
}

render();

