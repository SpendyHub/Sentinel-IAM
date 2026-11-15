# Sentinel IAM

### Enterprise Identity Governance & Security Platform

Sentinel IAM is an enterprise-focused Identity and Access Management (IAM) platform designed to centralize digital identity administration, enforce access-control policies, strengthen authentication security, and improve organizational identity governance.

The project aims to provide a unified security architecture for managing identities, permissions, access requests, identity lifecycles, and security events.

**Current stage:** Initial frontend implementation. Backend and core IAM capabilities are planned.

---

## Project Vision

To engineer a scalable, secure, and intelligent identity governance platform that helps organizations protect digital resources, enforce least-privilege access, and maintain visibility over identity-related security risks.

## Core Objectives

- Centralized identity and user lifecycle management.
- Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC).
- Secure authentication and authorization.
- Identity provisioning and deprovisioning.
- Access request and approval workflows.
- Audit logging and security monitoring.
- Enterprise identity governance and compliance support.
- Integration with modern identity providers.

---

## Enterprise Security Problems Addressed

Modern organizations face significant challenges managing digital identities and controlling access to sensitive resources.

Sentinel IAM is designed to address the following challenges:

### 1. Identity Sprawl
Centralized identity administration across organizational users, administrators, contractors, and service accounts.

### 2. Excessive Privileges
Structured roles, permissions, and policy enforcement to support least-privilege access.

### 3. Weak Access Governance
Controlled access requests, approval workflows, and periodic access reviews to improve accountability.

### 4. Incomplete Identity Lifecycle Management
Structured Joiner, Mover, and Leaver (JML) processes to ensure access changes when organizational responsibilities change.

### 5. Limited Security Visibility
An architectural foundation for audit trails, identity activity monitoring, and security event investigation.

### 6. Identity-Based Security Threats
Security controls designed to address compromised credentials, unauthorized access, privilege escalation, and suspicious authentication activity.

---

## System Architecture

Sentinel IAM is being designed around a modular architecture that separates the presentation layer, application logic, identity infrastructure, and data persistence.

### Architecture Components

| Component | Technology | Responsibility |
|---|---|---|
| Frontend | React and TypeScript | User interface and identity administration |
| Backend | Python and FastAPI | REST APIs, business logic, and security enforcement |
| Database | PostgreSQL | Identity, access, policy, and audit data |
| Identity Provider | Keycloak | Authentication, SSO, and identity federation |

These technologies represent the intended architecture. Integration and implementation will be verified as development progresses.

### Architectural Layers

**1. Presentation Layer**

Provides employee and administrator interfaces for identity administration, access requests, approvals, and security visibility.

**2. Application Layer**

Processes API requests, applies business rules, validates permissions, and coordinates identity-related operations.

**3. Identity and Security Layer**

Handles authentication integration, authorization decisions, access policies, and identity security controls.

**4. Data Layer**

Persists identity records, organizational relationships, access assignments, policy information, and audit events.

---

## Technology Stack

### Frontend
- React
- TypeScript
- Vite
- Lucide React

### Backend — Planned
- Python
- FastAPI
- Pydantic

### Identity and Access Management — Planned
- Keycloak
- OAuth 2.0
- OpenID Connect (OIDC)
- Role-Based Access Control (RBAC)
- Attribute-Based Access Control (ABAC)

### Database — Planned
- PostgreSQL
- SQLAlchemy
- Alembic

### Infrastructure and DevOps
- Docker
- Docker Compose
- Linux and WSL2

### Development and Version Control
- Git
- GitHub
- Visual Studio Code

---

## IAM and Security Capabilities

Sentinel IAM is designed around enterprise identity governance and security requirements.

The following capabilities define the intended engineering scope. They are not all implemented yet.

### Identity Management
- Centralized identity administration.
- User onboarding, modification, suspension, and termination.
- Joiner, Mover, and Leaver (JML) lifecycle workflows.
- Identity provisioning and deprovisioning.

### Authentication and Federation
- Single Sign-On (SSO).
- Multi-Factor Authentication (MFA).
- OAuth 2.0 and OpenID Connect integration.
- Secure session and token lifecycle management.
- Identity provider integration through Keycloak.

### Authorization and Access Control
- Role-Based Access Control (RBAC).
- Attribute-Based Access Control (ABAC).
- Fine-grained permission management.
- Policy enforcement and authorization decisions.
- Least-privilege access.
- Deny-by-default security.

### Identity Governance
- Access request and approval workflows.
- Periodic access certification and reviews.
- Separation of Duties (SoD).
- Privileged Access Management (PAM) integration.
- Identity lifecycle governance.

### Provisioning and Integration
- SCIM-based identity provisioning.
- External identity provider integration.
- Automated access assignment and revocation.

### Security Monitoring and Auditing
- Identity activity logging.
- Authentication and authorization event tracking.
- Suspicious activity monitoring.
- Security investigation and audit reporting.

---

## Security Engineering Principles

Security is a foundational requirement throughout Sentinel IAM's architecture and implementation.

### Zero Trust Architecture
- Never trust an identity or request by default.
- Evaluate access decisions using relevant security context.
- Verify identity, device, context, and permissions where applicable.

### Least Privilege
- Grant only the permissions required for a specific responsibility.
- Restrict privileged operations.
- Review and revoke unnecessary access.

### Defense in Depth
- Apply multiple independent security controls.
- Protect authentication, authorization, APIs, databases, and infrastructure.
- Avoid relying on a single security mechanism.

### Secure by Default
- Deny access unless explicitly authorized.
- Validate untrusted input.
- Enforce server-side authorization.
- Protect secrets and sensitive configuration.

### Accountability and Auditability
- Record security-relevant identity events.
- Maintain traceable administrative actions.
- Support investigation and incident response.

### Continuous Security Validation
- Test authentication and authorization boundaries.
- Evaluate access-control policies.
- Perform vulnerability assessments.
- Document findings and remediation.

Security controls will be implemented and verified as development progresses.

---

## Project Implementation Status

Sentinel IAM is currently in its initial implementation phase.

### Implemented
- Initial React and TypeScript frontend.
- Responsive identity security dashboard.
- Reusable dashboard components.
- Identity statistics and recent activity interface.
- Mobile, tablet, and desktop layouts.
- Successful frontend production build.
- Git-based version control and GitHub repository setup.

### In Progress
- Frontend application development and refinement.
- Root project documentation.

### Planned
- FastAPI backend implementation.
- Core identity and access management services.
- PostgreSQL persistence and database migrations.
- Keycloak integration for authentication and federation.
- SSO, MFA, and OIDC integration.
- RBAC and ABAC authorization engine.
- Identity lifecycle management and SCIM provisioning.
- Access request and approval workflows.
- Identity governance and access certification.
- Audit logging and security monitoring.
- Docker Compose infrastructure.
- Automated testing and security validation.

> A capability will only be marked as implemented after its functionality has been developed and verified.

---

## Repository Structure

The repository is organized to separate application code, infrastructure, security testing, and technical documentation.

```text
sentinel-iam/
├── README.md
├── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   └── styles/
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── security/
│   │   ├── policies/
│   │   └── integrations/
│   └── tests/
│
├── infrastructure/
│   ├── docker/
│   ├── keycloak/
│   └── database/
│       └── init/
│
├── security/
│   ├── threat-models/
│   ├── penetration-tests/
│   ├── findings/
│   └── remediation/
│
└── docs/
    ├── architecture/
    ├── api/
    └── user-guides/
```

*Note: This represents the intended repository organization. Some directories will be created and populated as implementation progresses. Git does not track empty directories.*

---

## Development Prerequisites

The following tools are used or planned for Sentinel IAM development.

| Tool | Purpose |
|---|---|
| Git | Version control |
| GitHub | Source code hosting |
| Node.js | Frontend runtime |
| npm | Frontend package management |
| React | Frontend application |
| TypeScript | Frontend type safety |
| Python | Backend development |
| FastAPI | Backend API framework |
| PostgreSQL | Relational database |
| Keycloak | Identity and access management |
| Docker | Containerization |
| Docker Compose | Multi-service orchestration |
| Linux | Development environment |

### Current Development Environment
- Windows 11 Pro.
- Ubuntu 24.04 through WSL2.
- Visual Studio Code.
- Docker Desktop with WSL2 integration.

### Installation Guide

Complete installation and startup instructions will be provided after the backend, database, and identity provider services have been configured and verified.

---

## Testing and Quality Assurance

Testing is an essential part of Sentinel IAM's development lifecycle.

The platform will use multiple testing strategies to validate functionality, reliability, and security.

### Unit Testing
- Test individual functions and services.
- Validate identity management operations.
- Verify authorization and policy evaluation logic.

### Integration Testing
- Test communication between application components.
- Verify API and database interactions.
- Validate identity provider integration.

### API Testing
- Test API endpoints and request validation.
- Verify authentication requirements.
- Test authorization enforcement and error handling.

### Security Testing
- Test for broken access control.
- Assess privilege escalation risks.
- Validate token handling and session security.
- Test input validation and injection resistance.
- Verify audit logging and security event generation.

### Frontend Testing
- Validate component behavior.
- Test navigation and user interactions.
- Verify responsive layouts across screen sizes.

### Continuous Verification

Every major feature must be tested before it is considered complete.

Test results, discovered vulnerabilities, and remediation activities will be documented as implementation progresses.

---

## Development Roadmap

Sentinel IAM will be developed through structured implementation phases.

### Phase 1 — Foundation
- [x] Repository initialization.
- [x] Frontend project setup.
- [x] Initial dashboard implementation.
- [x] Responsive dashboard layout.
- [x] Production build verification.
- [ ] Root project documentation completion.

### Phase 2 — Backend Engineering
- [ ] FastAPI application foundation.
- [ ] API architecture and configuration.
- [ ] Database integration.
- [ ] Identity data models.
- [ ] Request validation and error handling.

### Phase 3 — Authentication and Authorization
- [ ] Keycloak integration.
- [ ] OAuth 2.0 and OpenID Connect.
- [ ] Single Sign-On and MFA.
- [ ] JWT validation.
- [ ] RBAC and ABAC policy enforcement.

### Phase 4 — Identity Governance
- [ ] Identity lifecycle management.
- [ ] Joiner, Mover, and Leaver workflows.
- [ ] Access requests and approvals.
- [ ] Access certification.
- [ ] Separation of Duties controls.
- [ ] Provisioning and deprovisioning.

### Phase 5 — Security Engineering
- [ ] Security audit logging.
- [ ] Threat detection and monitoring.
- [ ] Privileged access controls.
- [ ] Threat modeling.
- [ ] Penetration testing.
- [ ] Vulnerability remediation.

### Phase 6 — Infrastructure and Deployment
- [ ] Docker containerization.
- [ ] Docker Compose orchestration.
- [ ] CI/CD pipeline.
- [ ] Deployment configuration.
- [ ] Production readiness assessment.

### Phase 7 — Final Validation
- [ ] Automated test coverage.
- [ ] Integration testing.
- [ ] End-to-end testing.
- [ ] Security assessment.
- [ ] Technical documentation.
- [ ] Final architecture review.

Roadmap items will only be marked complete after implementation and verification.

---

## Engineering Objectives

Sentinel IAM is intended to demonstrate practical engineering competence across identity security, backend development, frontend engineering, and infrastructure.

### Identity and Access Management
- Design centralized identity administration.
- Implement secure authentication and authorization.
- Build granular access-control policies.
- Automate identity lifecycle operations.

### Backend Engineering
- Develop secure and maintainable REST APIs.
- Design reliable relational database models.
- Implement reusable business logic and services.
- Enforce validation and consistent error handling.

### Security Engineering
- Apply Zero Trust and least-privilege principles.
- Identify and mitigate identity-related vulnerabilities.
- Implement security monitoring and auditability.
- Validate security controls through controlled testing.

### Infrastructure Engineering
- Containerize application services.
- Configure identity provider and database infrastructure.
- Establish repeatable deployment workflows.
- Apply secure configuration management.

### Professional Engineering Practices
- Maintain version-controlled source code.
- Document architecture and technical decisions.
- Implement automated testing.
- Record security findings and remediation.
- Maintain clear implementation and verification records.

### Expected Outcome

The intended outcome is a documented, tested, and deployable identity governance platform that demonstrates practical enterprise IAM and security engineering capabilities.

---

## License

No open-source license has been assigned to this project yet.

Until a license is added, no open-source reuse or redistribution permissions are granted through this repository.

A suitable license will be considered before any official open-source release.
