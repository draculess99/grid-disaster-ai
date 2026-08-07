# Grid Disaster AI

**Predict the cascade. Protect the critical. Restore the grid.**

Grid Disaster AI is a human-governed emergency command center that simulates cascading electrical-grid failures, predicts which infrastructure is likely to fail next, coordinates specialist AI agents with competing priorities, and produces a recovery plan that requires human authorization before execution.

---

## The Problem

Major grid incidents rarely remain isolated.

A damaged transmission corridor can overload neighboring substations, interrupt hospitals, threaten water systems, disrupt communications, and leave hundreds of thousands of people without electricity.

Emergency operators must answer several questions simultaneously:

- What is failing now?
- What is likely to fail next?
- Which infrastructure is most critical?
- Which response protects the greatest number of people?
- What tradeoffs are being made?
- Who has authority to approve the final action?

Grid Disaster AI turns those questions into one coordinated operational workflow.

---

## Core Demo

The primary scenario is a:

**Category 4 Hurricane — Catastrophic Severity — Night**

The demonstration follows this sequence:

**MONITORING**
→ **DISASTER**
→ **CASCADING FAILURE**
→ **CRITICAL INFRASTRUCTURE AT RISK**
→ **AI ANALYSIS**
→ **AGENT DISAGREEMENT**
→ **RECOVERY COMMANDER**
→ **HUMAN AUTHORIZATION**
→ **RECOVERY**
→ **STABILIZED**

---

## Key Features

### Command Center

Provides a live operational overview including:

- Grid Stability
- Customers Without Power
- Critical Facilities at Risk
- Estimated Restoration Time
- Cascade Probability
- Repair Crews Available
- Mobile Generators Available
- Highest-Risk Facility

During the hurricane scenario, the grid can deteriorate from approximately:

- 96% grid stability
- 0 customers without power
- 0 critical facilities at risk

to an emergency state of approximately:

- 46% grid stability
- 462,840 customers without power
- 8 critical facilities at risk
- 81% cascade probability
- 26–34 hour estimated restoration time

---

## Cascading Failure Forecast

Grid Disaster AI forecasts secondary failures across multiple time horizons:

- NOW
- NEXT 15 MINUTES
- NEXT 60 MINUTES

Predictions can include:

- Asset name
- Failure probability
- Estimated time to failure
- Population impact
- Critical dependencies
- Risk severity

Example predicted risks include:

- East Junction
- Metro Distribution Hub
- North Water Treatment Plant
- Saint Anne Medical Center

---

## Lives and Infrastructure at Immediate Risk

Critical infrastructure is dynamically ranked according to operational risk.

Facilities include:

- Saint Anne Medical Center
- North Water Treatment Plant
- Metro Communications Hub
- Children's Medical Center
- Riverside Emergency Shelter
- Regional Trauma Hospital

The system evaluates information such as:

- Current state
- People affected
- Backup-power availability
- Risk score
- Priority level

When the incident reaches STABILIZED, the system reports that critical infrastructure is protected rather than continuing to display an active emergency ranking.

---

## Grid Network

The Grid Network provides a visual schematic of generation, transmission, distribution, and critical infrastructure.

Example assets include:

### Generation
- North Ridge Generation
- Harbor Gas Plant

### Grid Infrastructure
- Central Substation
- East Junction
- West Valley
- Riverbend
- Metro Distribution Hub
- Coastal Transfer Station

### Critical Infrastructure
- Saint Anne Medical Center
- Regional Trauma Hospital
- Children's Medical Center
- North Water Treatment Plant
- Metro Communications Hub
- Riverside Emergency Shelter

Assets transition through operational states such as:

- Operational
- Stressed
- Overloaded
- Failed
- Protected
- Restoring
- Restored

---

## Grid Filters

Operators can isolate important infrastructure using:

- ALL
- FAILED
- AT RISK
- CRITICAL
- RESTORED

Filtering changes only the visualization and does not modify the underlying simulation state.

---

## Interactive Asset Intelligence

Grid assets are clickable.

The Asset Details panel provides operational information including:

- Asset name
- Asset type
- Current status
- Capacity
- Current load
- Population served
- Dependencies
- Risk score
- Predicted failure status/time
- Recommended response

Asset information changes according to the current simulation state.

---

## Multi-Agent Coordination

Grid Disaster AI uses specialist decision perspectives to evaluate the emergency.

### Grid Stability Agent

Focuses on preventing broader grid collapse.

### Critical Infrastructure Agent

Prioritizes hospitals, water treatment, communications, and other essential services.

### Public Safety Agent

Evaluates population impact and community risk.

### Repair and Resources Agent

Evaluates crews, generators, repair priorities, and operational resources.

### Recovery Commander

Reconciles competing recommendations and creates one coordinated recovery strategy.

---

## Agent Disagreement

The agents are intentionally allowed to disagree.

For example:

**Grid Stability Agent**

May recommend immediately isolating the eastern grid zone to stop further cascading failures.

**Public Safety Agent**

May warn that isolation would disconnect approximately 82,000 residents.

**Critical Infrastructure Agent**

May identify Saint Anne Medical Center as being inside the affected zone with limited backup-power time.

**Repair and Resources Agent**

May recommend deploying mobile generation before grid isolation.

The **Recovery Commander** reconciles these competing priorities into a coordinated plan.

This makes the decision process visible rather than presenting AI output as an unexplained answer.

---

## Human-Governed AI

Grid Disaster AI does not allow the AI system to automatically execute a high-impact recovery decision.

The workflow reaches:

**AWAITING HUMAN AUTHORIZATION**

The incident commander must explicitly confirm authorization before the recovery plan can execute.

This demonstrates a core principle of the project:

> AI can analyze, predict, coordinate, and recommend — but accountable human operators retain final authority.

---

## Recovery Strategy

A recovery plan may include actions such as:

1. Deploy mobile generation to Saint Anne Medical Center
2. Preserve electrical service to North Water Treatment Plant
3. Isolate the damaged coastal transmission corridor
4. Reroute available power through Central Substation
5. Dispatch Crew Alpha to East Junction
6. Dispatch Crew Bravo to Harbor Line 4
7. Reduce noncritical industrial demand
8. Issue emergency public alerts
9. Continuously reassess grid stability

Recovery actions progress through their operational lifecycle until completion.

---

## Stabilization

After authorized recovery:

- Grid Stability improves to approximately 78%
- Facilities at Risk falls to 0
- Cascade Probability falls to 0%
- Highest-Risk Facility becomes None
- Critical infrastructure is protected
- Estimated restoration time improves
- Grid assets transition toward restored status

The incident ends in:

**STABILIZED / RESOLVED**

---

## Incident Timeline

Grid Disaster AI maintains an incident timeline containing key events such as:

- Initial disaster
- Asset failures
- Cascading impacts
- AI analysis
- Agent recommendations
- Conflicting recommendations
- Human authorization
- Crew deployments
- Infrastructure protection
- Recovery actions
- Stabilization

This provides an auditable operational history of the response.

---

## Architecture

Grid Disaster AI is designed as a deterministic hackathon simulation that does not depend on external infrastructure.

```text
Category 4 Hurricane Scenario
            |
            v
     Simulation State
            |
            v
   Cascading Grid Model
            |
      +-----+------+
      |            |
      v            v
Grid Network   Risk Forecasting
      |            |
      +------+-----+
             |
             v
      Specialist Agents
             |
             v
       Agent Conflict
             |
             v
     Recovery Commander
             |
             v
   Human Authorization Gate
             |
             v
      Recovery Actions
             |
             v
    STABILIZED / RESOLVED
             |
             v
      Incident Timeline