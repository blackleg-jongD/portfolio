# Tasks: 취업용 포트폴리오 웹사이트

**Input**: Design documents from `/specs/001-portfolio/`
**Prerequisites**: plan.md ✓, spec.md ✓, research.md ✓, data-model.md ✓, contracts/ ✓

**Tests**: This is a static portfolio website. Test tasks are included for quality assurance, but focus on visual/functional testing rather than unit tests.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `frontend/` at repository root
- All paths shown below follow the frontend structure from plan.md

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure per implementation plan in frontend/
- [x] T002 Initialize Vite project with vanilla template
- [x] T003 [P] Configure package.json with dependencies (Vite, development tools)
- [x] T004 [P] Setup ESLint and Prettier configuration files
- [x] T005 [P] Create base directory structure (src/components, src/sections, src/data, src/styles, src/utils, src/assets)
- [x] T006 [P] Setup Git repository and .gitignore file
- [x] T007 [P] Create README.md with project overview and setup instructions
- [x] T008 [P] Initialize basic HTML structure in frontend/src/index.html
- [x] T009 [P] Create base CSS file structure (frontend/src/styles/global.css, frontend/src/styles/variables.css)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T010 Create main JavaScript entry point in frontend/src/main.js
- [x] T011 [P] Implement data loader utility in frontend/src/utils/dataLoader.js for loading JSON files
- [x] T012 [P] Create base CSS variables and theme in frontend/src/styles/variables.css
- [x] T013 [P] Implement global CSS reset and base styles in frontend/src/styles/global.css
- [x] T014 Create JSON data files structure:
  - [x] T014a [P] Create frontend/src/data/personal-info.json (template structure)
  - [x] T014b [P] Create frontend/src/data/projects.json (empty array template)
  - [x] T014c [P] Create frontend/src/data/skills.json (empty array template)
  - [x] T014d [P] Create frontend/src/data/contact.json (template structure)
- [x] T015 [P] Create public directory structure (favicon, robots.txt, etc.)
- [x] T016 Configure Vite build settings for GitHub Pages deployment in frontend/vite.config.js

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - 포트폴리오 메인 페이지 탐색 (Priority: P1) 🎯 MVP

**Goal**: 방문자가 포트폴리오 웹사이트에 접속하여 지원자의 기본 정보(이름, 직무, 소개)를 한눈에 볼 수 있고, 주요 섹션으로 쉽게 이동할 수 있는 메인 페이지를 제공합니다.

**Independent Test**: 방문자가 웹사이트 URL에 접속하여 메인 페이지가 로드되고, 지원자의 기본 정보(이름, 직무, 소개)를 3초 이내에 확인할 수 있습니다. 페이지는 깔끔하게 정리되어 있으며, 주요 섹션으로 쉽게 이동할 수 있습니다.

### Implementation for User Story 1

- [x] T017 [US1] Create Header component structure in frontend/src/components/Header/
- [x] T018 [P] [US1] Create Navigation component in frontend/src/components/Navigation/navigation.js
- [x] T019 [P] [US1] Create Navigation styles in frontend/src/components/Navigation/navigation.css
- [x] T020 [US1] Create Hero section component in frontend/src/sections/Hero/hero.js
- [x] T021 [P] [US1] Create Hero section styles in frontend/src/sections/Hero/hero.css
- [x] T022 [US1] Implement personal info data loading and rendering in Hero section
- [x] T023 [P] [US1] Create About section placeholder in frontend/src/sections/About/about.js
- [x] T024 [P] [US1] Create About section styles in frontend/src/sections/About/about.css
- [x] T025 [P] [US1] Create Projects section placeholder in frontend/src/sections/Projects/projects.js
- [x] T026 [P] [US1] Create Skills section placeholder in frontend/src/sections/Skills/skills.js
- [x] T027 [P] [US1] Create Contact section placeholder in frontend/src/sections/Contact/contact.js
- [x] T028 [US1] Create Footer component in frontend/src/components/Footer/footer.js
- [x] T029 [P] [US1] Create Footer styles in frontend/src/components/Footer/footer.css
- [x] T030 [US1] Implement smooth scroll navigation to sections in frontend/src/main.js
- [x] T031 [US1] Integrate all sections into main HTML structure in frontend/src/index.html
- [x] T032 [US1] Implement page initialization in frontend/src/main.js to load and render personal info

**Checkpoint**: At this point, User Story 1 should be fully functional - visitors can see basic info and navigate to sections

---

## Phase 4: User Story 2 - 프로젝트 및 작품 포트폴리오 조회 (Priority: P1)

**Goal**: 방문자가 지원자가 참여한 프로젝트나 작품을 탐색하여 기술적 역량과 경험을 평가할 수 있습니다. 각 프로젝트는 명확한 설명, 사용 기술, 주요 기능, 결과물(이미지/데모 링크)을 포함합니다.

**Independent Test**: 방문자가 프로젝트 섹션으로 이동하여 프로젝트 목록을 확인하고, 특정 프로젝트를 클릭하면 상세 정보(설명, 기술 스택, 주요 기능, 결과물 링크)를 확인할 수 있습니다.

### Implementation for User Story 2

- [x] T033 [P] [US2] Create ProjectCard component in frontend/src/components/ProjectCard/projectCard.js
- [x] T034 [P] [US2] Create ProjectCard styles in frontend/src/components/ProjectCard/projectCard.css
- [x] T035 [US2] Implement Projects section to load and render projects from frontend/src/data/projects.json
- [x] T036 [P] [US2] Create project filtering utility in frontend/src/utils/projectFilter.js
- [x] T037 [US2] Implement project filtering UI (technology filter buttons) in Projects section
- [x] T038 [P] [US2] Create ProjectModal component for detailed view in frontend/src/components/ProjectModal/projectModal.js
- [x] T039 [P] [US2] Create ProjectModal styles in frontend/src/components/ProjectModal/projectModal.css
- [x] T040 [US2] Implement project detail modal functionality (open/close, display project details)
- [x] T041 [US2] Implement project image lazy loading in ProjectCard component
- [x] T042 [US2] Add external link handling (demo, GitHub) with target="_blank" and rel attributes
- [x] T043 [US2] Integrate Projects section with main page navigation

**Checkpoint**: At this point, User Story 2 should be fully functional - visitors can browse and view project details

---

## Phase 5: User Story 3 - 기술 스택 및 역량 표시 (Priority: P2)

**Goal**: 방문자가 지원자가 보유한 기술 스택과 역량 수준을 명확하게 파악할 수 있습니다. 프로그래밍 언어, 프레임워크, 도구, 기타 전문 기술이 시각적으로 표현되어 지원자의 전문성을 효과적으로 전달합니다.

**Independent Test**: 방문자가 기술 스택 섹션으로 이동하여 지원자가 사용하는 프로그래밍 언어, 프레임워크, 도구를 카테고리별로 확인할 수 있습니다.

### Implementation for User Story 3

- [x] T044 [P] [US3] Create SkillBadge component in frontend/src/components/SkillBadge/skillBadge.js
- [x] T045 [P] [US3] Create SkillBadge styles in frontend/src/components/SkillBadge/skillBadge.css
- [x] T046 [US3] Implement Skills section to load and render skills from frontend/src/data/skills.json
- [x] T047 [P] [US3] Create skill category grouping utility in frontend/src/utils/skillGroup.js
- [x] T048 [US3] Implement category-based skill display (language, framework, tool, platform sections)
- [x] T049 [P] [US3] Implement skill level visualization (beginner, intermediate, advanced, expert) in SkillBadge
- [x] T050 [US3] Integrate Skills section with main page navigation

**Checkpoint**: At this point, User Story 3 should be fully functional - visitors can view skills by category

---

## Phase 6: User Story 4 - 연락처 및 소셜 링크 접근 (Priority: P2)

**Goal**: 방문자는 지원자에게 연락하거나 추가 정보를 얻기 위해 이메일, GitHub, LinkedIn 등 다양한 채널에 쉽게 접근할 수 있습니다.

**Independent Test**: 방문자가 연락처 섹션이나 헤더/푸터에서 이메일 주소나 소셜 링크를 찾아 클릭하면, 해당 채널로 이동하거나 액션이 트리거됩니다.

### Implementation for User Story 4

- [x] T051 [P] [US4] Create Contact section to load and render contact info from frontend/src/data/contact.json
- [x] T052 [US4] Implement email link (mailto:) functionality in Contact section
- [x] T053 [P] [US4] Create social links component for GitHub, LinkedIn, etc. in frontend/src/components/SocialLinks/socialLinks.js
- [x] T054 [P] [US4] Create social links styles in frontend/src/components/SocialLinks/socialLinks.css
- [x] T055 [US4] Implement external link handling (target="_blank", rel="noopener noreferrer")
- [x] T056 [US4] Add contact info to Footer component
- [x] T057 [US4] Integrate Contact section with main page navigation

**Checkpoint**: At this point, User Story 4 should be fully functional - visitors can access contact information

---

## Phase 7: User Story 5 - 반응형 디자인 및 접근성 (Priority: P2)

**Goal**: 웹사이트는 다양한 기기(데스크톱, 태블릿, 모바일)와 화면 크기에서 일관되게 작동하며, 접근성 기준을 준수합니다.

**Independent Test**: 사용자가 데스크톱, 태블릿, 모바일 기기에서 웹사이트에 접속하여 모든 기능과 콘텐츠가 화면 크기에 맞게 적절히 표시되는지 확인합니다.

### Implementation for User Story 5

- [x] T058 [P] [US5] Implement responsive design breakpoints in frontend/src/styles/variables.css (mobile, tablet, desktop)
- [x] T059 [US5] Update all section styles for mobile-first responsive design
- [x] T060 [P] [US5] Implement mobile navigation menu (hamburger menu) in Navigation component
- [x] T061 [US5] Add ARIA labels and semantic HTML throughout components
- [x] T062 [P] [US5] Implement keyboard navigation support (Tab key, focus indicators)
- [x] T063 [P] [US5] Add alt text to all images and ensure proper image loading with fallbacks
- [x] T064 [US5] Ensure color contrast ratios meet WCAG 2.1 AA standards (4.5:1 for text)
- [x] T065 [US5] Test and fix responsive layout issues on mobile devices
- [x] T066 [US5] Test and fix responsive layout issues on tablet devices

**Checkpoint**: At this point, User Story 5 should be fully functional - website is responsive and accessible

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

### Performance Optimization

- [ ] T067 [P] Optimize images (compress, convert to WebP format) in frontend/src/assets/
- [ ] T068 [P] Implement image lazy loading for all images across sections
- [ ] T069 Implement code splitting for faster initial load
- [x] T070 [P] Add resource hints (preconnect, dns-prefetch) in frontend/src/index.html
- [x] T071 Minimize and optimize CSS/JavaScript bundles in Vite build configuration

### SEO Optimization

- [x] T072 [P] Add meta tags (title, description, keywords) in frontend/src/index.html
- [x] T073 [P] Add Open Graph tags for social media sharing
- [x] T074 [P] Add Twitter Card tags
- [x] T075 [P] Implement structured data (JSON-LD) for SEO in frontend/src/index.html
- [x] T076 [P] Create sitemap.xml in frontend/public/
- [x] T077 [P] Create robots.txt in frontend/public/

### Accessibility Enhancements

- [x] T078 [P] Add skip to main content link
- [x] T079 [P] Ensure all interactive elements are keyboard accessible
- [x] T080 [P] Add focus visible indicators for all focusable elements
- [ ] T081 Run accessibility audit and fix issues (Lighthouse, WAVE)

### Animation & UX Polish

- [x] T082 [P] Implement smooth scroll animations using CSS
- [ ] T083 [P] Add fade-in animations for sections on scroll
- [ ] T084 [P] Implement loading states for images
- [ ] T085 Add transition effects for interactive elements (hover, focus)

### Deployment Setup

- [x] T086 [P] Create GitHub Actions workflow for deployment in .github/workflows/deploy.yml
- [ ] T087 Configure GitHub Pages deployment settings
- [ ] T088 [P] Test production build locally (npm run build)
- [ ] T089 [P] Verify all assets load correctly in production build

### Documentation

- [x] T090 [P] Update README.md with deployment instructions
- [x] T091 [P] Document data file structure and how to update content
- [ ] T092 Add inline code comments for complex logic

### Quality Assurance

- [ ] T093 Run Lighthouse performance audit and achieve targets (FCP < 1s, LCP < 2.5s, TTI < 3.5s, CLS < 0.1)
- [ ] T094 [P] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] T095 [P] Test on multiple devices (desktop, tablet, mobile)
- [ ] T096 Validate HTML markup
- [ ] T097 Validate CSS
- [ ] T098 Test all external links are working

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-7)**: All depend on Foundational phase completion
  - User stories can proceed sequentially in priority order (US1 → US2 → US3 → US4 → US5)
  - Some tasks within stories can run in parallel
- **Polish (Phase 8)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Uses data model defined in Phase 2
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Uses data model defined in Phase 2
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - Uses data model defined in Phase 2
- **User Story 5 (P2)**: Should be implemented after US1-US4 to ensure all components are responsive

### Within Each User Story

- Component structure before styles
- Data loading utilities before components that use them
- Base components before sections that use them
- Core implementation before polish/enhancements
- Story complete before moving to next priority

### Parallel Opportunities

**Phase 1 (Setup)**:
- T003, T004, T005, T006, T007, T008, T009 can all run in parallel

**Phase 2 (Foundational)**:
- T011, T012, T013, T014a, T014b, T014c, T014d, T015, T016 can run in parallel

**Phase 3 (User Story 1)**:
- T018, T019, T021, T023, T024, T025, T026, T027, T029 can run in parallel
- After components created, integration tasks (T030, T031, T032) proceed

**Phase 4 (User Story 2)**:
- T033, T034, T036, T038, T039 can run in parallel

**Phase 5 (User Story 3)**:
- T044, T045, T047, T049 can run in parallel

**Phase 6 (User Story 4)**:
- T053, T054 can run in parallel

**Phase 7 (User Story 5)**:
- T058, T060, T062, T063, T064 can run in parallel

**Phase 8 (Polish)**:
- Most tasks marked [P] can run in parallel

---

## Parallel Example: User Story 1

```bash
# Launch component creation tasks in parallel:
Task: "Create Navigation component in frontend/src/components/Navigation/navigation.js"
Task: "Create Navigation styles in frontend/src/components/Navigation/navigation.css"
Task: "Create Hero section styles in frontend/src/sections/Hero/hero.css"
Task: "Create About section placeholder in frontend/src/sections/About/about.js"
Task: "Create Footer styles in frontend/src/components/Footer/footer.css"

# After components are ready, integrate:
Task: "Integrate all sections into main HTML structure"
Task: "Implement page initialization to load and render personal info"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (메인 페이지 탐색)
4. **STOP and VALIDATE**: Test User Story 1 independently
   - Verify personal info displays correctly
   - Verify navigation works
   - Verify page loads within 3 seconds
   - Test on mobile device
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo (Projects visible)
4. Add User Story 3 → Test independently → Deploy/Demo (Skills visible)
5. Add User Story 4 → Test independently → Deploy/Demo (Contact accessible)
6. Add User Story 5 → Test independently → Deploy/Demo (Fully responsive)
7. Polish phase → Final optimization

Each story adds value without breaking previous stories.

### Sequential Development Strategy

With a single developer or small team:

1. Team completes Setup + Foundational together
2. Sequential story implementation:
   - Complete User Story 1 (P1) → Test → Deploy
   - Complete User Story 2 (P1) → Test → Deploy
   - Complete User Story 3 (P2) → Test → Deploy
   - Complete User Story 4 (P2) → Test → Deploy
   - Complete User Story 5 (P2) → Test → Deploy
3. Polish phase for final touches

---

## Notes

- [P] tasks = different files, no dependencies - can work on simultaneously
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group (component + styles together)
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- Focus on MVP (User Story 1) first to get a working portfolio quickly
- Data files (JSON) can be updated independently without code changes

---

## Summary

- **Total Tasks**: 98 tasks
- **Setup Tasks**: 9 tasks (Phase 1)
- **Foundational Tasks**: 7 tasks (Phase 2)
- **User Story 1 Tasks**: 16 tasks (Phase 3) - MVP
- **User Story 2 Tasks**: 11 tasks (Phase 4)
- **User Story 3 Tasks**: 7 tasks (Phase 5)
- **User Story 4 Tasks**: 7 tasks (Phase 6)
- **User Story 5 Tasks**: 9 tasks (Phase 7)
- **Polish Tasks**: 32 tasks (Phase 8)

- **Parallel Opportunities**: Many tasks within each phase can run in parallel
- **Independent Test Criteria**: Each user story has clear test criteria defined
- **Suggested MVP Scope**: User Story 1 (메인 페이지 탐색) - provides basic portfolio visibility

**Format Validation**: ✅ All tasks follow checklist format (checkbox, ID, labels, file paths)
