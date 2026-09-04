/**
 * Realize.responsibly - Main Application Logic
 * Manages view routing, branch gallery, specializations, timed student popup, and eligibility analyzer.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Fluid Canvas Background Shader
  const canvas = window.initViscousCanvas('bgCanvas');

  // Application State
  let currentBranch = null;
  let currentSpecialization = null;
  let timerCountdown = 120; // 2 minutes (120 seconds)

  // DOM Elements
  const introOverlay = document.getElementById('introOverlay');
  const mainGalleryView = document.getElementById('mainGalleryView');
  const branchDetailView = document.getElementById('branchDetailView');
  const branchesContainer = document.getElementById('branchesContainer');
  const modalBackdrop = document.getElementById('profileModal');
  const modalTriggerBtn = document.getElementById('openModalBtn');
  const modalCloseBtn = document.getElementById('closeModalBtn');
  const profileForm = document.getElementById('profileForm');
  const analysisResultBox = document.getElementById('analysisResultBox');

  // 1. Intro Animation Dismissal
  const dismissIntro = () => {
    if (introOverlay && !introOverlay.classList.contains('fade-out')) {
      introOverlay.classList.add('fade-out');
      setTimeout(() => {
        introOverlay.style.display = 'none';
      }, 350);
    }
  };

  // Auto dismiss intro smoothly after 2000ms
  setTimeout(dismissIntro, 2000);
  introOverlay.addEventListener('click', dismissIntro);
  window.addEventListener('keydown', dismissIntro);

  // 2. Render Main 4-Box Engineering Branches Horizontal Gallery
  const renderBranchesGallery = () => {
    branchesContainer.innerHTML = '';

    ENGINEERING_BRANCHES.forEach((branch) => {
      const card = document.createElement('div');
      card.className = 'branch-quad-box';
      card.dataset.id = branch.id;

      card.innerHTML = `
        <div>
          <div class="branch-box-code">${branch.shortName}</div>
          <h3 class="branch-box-title">${branch.name}</h3>
          <p class="branch-box-desc">${branch.description}</p>
        </div>
        <div class="branch-box-footer">
          <span class="branch-box-badge">${branch.specializations.length} Specializations</span>
          <span>Explore →</span>
        </div>
      `;

      card.addEventListener('click', () => openBranchDetail(branch.id));
      branchesContainer.appendChild(card);
    });
  };

  // Carousel Controls
  const scrollLeftBtn = document.getElementById('scrollLeftBtn');
  const scrollRightBtn = document.getElementById('scrollRightBtn');

  if (scrollLeftBtn && scrollRightBtn) {
    scrollLeftBtn.addEventListener('click', () => {
      branchesContainer.scrollBy({ left: -340 * 2, behavior: 'smooth' });
    });
    scrollRightBtn.addEventListener('click', () => {
      branchesContainer.scrollBy({ left: 340 * 2, behavior: 'smooth' });
    });
  }

  // 3. Open Branch Detail View (Short overview + Specialization Boxes)
  const openBranchDetail = (branchId) => {
    const branch = getBranchById(branchId);
    if (!branch) return;

    currentBranch = branch;
    currentSpecialization = null;

    // Render Overview & Specializations Selector
    document.getElementById('branchOverviewTitle').textContent = branch.name;
    document.getElementById('branchOverviewTagline').textContent = branch.tagline;
    document.getElementById('branchOverviewText').textContent = branch.description;

    const specsContainer = document.getElementById('specsContainer');
    specsContainer.innerHTML = '';

    branch.specializations.forEach((spec) => {
      const specCard = document.createElement('div');
      specCard.className = 'spec-select-card';
      specCard.innerHTML = `
        <div>
          <h4 class="spec-card-name">${spec.name}</h4>
          <p class="spec-card-desc">${spec.whatIsIt}</p>
        </div>
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--neon-accent-blue);">View Full Roadmap & Details →</div>
      `;
      specCard.addEventListener('click', () => renderSpecializationDeepDive(spec));
      specsContainer.appendChild(specCard);
    });

    // Clear previous deep dive section
    document.getElementById('specializationDeepDive').innerHTML = '';

    // Switch View
    mainGalleryView.classList.remove('active');
    mainGalleryView.style.display = 'none';

    branchDetailView.style.display = 'block';
    branchDetailView.classList.add('active');

    window.scrollTo(0, 0);
  };

  // 4. Render Specialization Deep-Dive in White Quad-Curve Boxes (Black Text)
  const renderSpecializationDeepDive = (spec) => {
    currentSpecialization = spec;
    const container = document.getElementById('specializationDeepDive');
    container.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.className = 'specialization-detail-wrapper';

    // Box 1: What is it?
    const box1 = document.createElement('div');
    box1.className = 'quad-white-box';
    box1.innerHTML = `
      <div class="white-box-header">
        <h3 class="white-box-title">What is ${spec.name}?</h3>
      </div>
      <div class="white-box-content">
        <p>${spec.whatIsIt}</p>
      </div>
    `;

    // Box 2: What do you learn?
    const box2 = document.createElement('div');
    box2.className = 'quad-white-box';
    const learnListItems = spec.whatYouLearn.map(item => `<li class="white-box-list-item">✓ ${item}</li>`).join('');
    box2.innerHTML = `
      <div class="white-box-header">
        <h3 class="white-box-title">What Will You Learn?</h3>
      </div>
      <div class="white-box-content">
        <p style="margin-bottom: 16px;">Core subjects, software tools, and technical domain knowledge covered in this branch:</p>
        <ul class="white-box-list">
          ${learnListItems}
        </ul>
      </div>
    `;

    // Box 3: Projects, Portfolio, Internships & Skills
    const box3 = document.createElement('div');
    box3.className = 'quad-white-box';
    const projectItems = spec.projectsAndSkills.projects.map(p => `<li class="white-box-list-item">🚀 ${p}</li>`).join('');
    const skillBadges = spec.projectsAndSkills.skills.map(s => `<span style="background: #0f172a; color: #fff; padding: 6px 12px; border-radius: 16px; font-size: 0.85rem; font-weight: 600; display: inline-block; margin: 4px;">${s}</span>`).join('');
    box3.innerHTML = `
      <div class="white-box-header">
        <h3 class="white-box-title">Projects, Portfolio & Skills Required</h3>
      </div>
      <div class="white-box-content">
        <h4 style="font-size: 1.1rem; font-weight: 700; color: #0f172a; margin-bottom: 10px;">Essential Technical Skills</h4>
        <div style="margin-bottom: 24px;">${skillBadges}</div>

        <h4 style="font-size: 1.1rem; font-weight: 700; color: #0f172a; margin-bottom: 10px;">Recommended Capstone Projects</h4>
        <ul class="white-box-list" style="margin-bottom: 24px;">
          ${projectItems}
        </ul>

        <div style="background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 12px; padding: 16px;">
          <strong>💡 Portfolio & Resume Guidance:</strong> ${spec.projectsAndSkills.portfolioAdvice}
        </div>
      </div>
    `;

    // Box 4: Career Options & Placements
    const box4 = document.createElement('div');
    box4.className = 'quad-white-box';
    const rolesList = spec.careersAndPlacements.roles.map(r => `<span style="background: #e2e8f0; color: #0f172a; padding: 6px 14px; border-radius: 20px; font-weight: 700; font-size: 0.9rem; display: inline-block; margin: 4px;">${r}</span>`).join('');
    const recruitersList = spec.careersAndPlacements.topRecruiters.join(', ');
    box4.innerHTML = `
      <div class="white-box-header">
        <h3 class="white-box-title">Career Options & Job Placements</h3>
      </div>
      <div class="white-box-content">
        <h4 style="font-size: 1.1rem; font-weight: 700; color: #0f172a; margin-bottom: 10px;">High-Demand Career Roles</h4>
        <div style="margin-bottom: 20px;">${rolesList}</div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
          <div style="background: #f1f5f9; padding: 20px; border-radius: 16px;">
            <h5 style="color: #64748b; font-size: 0.85rem; font-weight: 800; text-transform: uppercase;">Average Salary Bracket</h5>
            <p style="font-size: 1.4rem; font-weight: 800; color: #0f172a; margin-top: 6px;">${spec.careersAndPlacements.salaryRange}</p>
          </div>
          <div style="background: #f1f5f9; padding: 20px; border-radius: 16px;">
            <h5 style="color: #64748b; font-size: 0.85rem; font-weight: 800; text-transform: uppercase;">Top Industry Recruiters</h5>
            <p style="font-size: 1rem; font-weight: 600; color: #0f172a; margin-top: 6px;">${recruitersList}</p>
          </div>
        </div>
      </div>
    `;

    // Box 5: Step-by-Step 4-Year Student Roadmap
    const box5 = document.createElement('div');
    box5.className = 'quad-white-box';
    const roadmapCards = spec.roadmap.map(step => `
      <div class="roadmap-card">
        <span class="roadmap-year">${step.year}</span>
        <h4 class="roadmap-card-title">${step.title}</h4>
        <p class="roadmap-card-text">${step.details}</p>
      </div>
    `).join('');

    box5.innerHTML = `
      <div class="white-box-header">
        <h3 class="white-box-title">Year 1 to Year 4 Student Roadmap</h3>
      </div>
      <div class="white-box-content">
        <p>Follow this step-by-step timeline to master courses, build your portfolio, secure summer internships, convert PPOs, and crack final placement offers:</p>
        <div class="roadmap-timeline">
          ${roadmapCards}
        </div>
      </div>
    `;

    wrapper.appendChild(box1);
    wrapper.appendChild(box2);
    wrapper.appendChild(box3);
    wrapper.appendChild(box4);
    wrapper.appendChild(box5);

    container.appendChild(wrapper);

    // Scroll to the specialization detail section instantly
    container.scrollIntoView({ behavior: 'auto' });
  };

  // Back Button Event
  document.getElementById('backToGalleryBtn').addEventListener('click', () => {
    branchDetailView.classList.remove('active');
    branchDetailView.style.display = 'none';

    mainGalleryView.style.display = 'block';
    mainGalleryView.classList.add('active');

    window.scrollTo(0, 0);
  });

  // 5. Modal Trigger & Timed Popup Handler (2 Minutes = 120 Seconds)
  const openModal = () => {
    modalBackdrop.classList.add('active');
  };
  const closeModal = () => {
    modalBackdrop.classList.remove('active');
  };

  const skipModalBtn = document.getElementById('skipModalBtn');
  if (skipModalBtn) {
    skipModalBtn.addEventListener('click', closeModal);
  }

  modalTriggerBtn.addEventListener('click', openModal);
  modalCloseBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  // 2-Minute Popup Countdown Timer
  const timerInterval = setInterval(() => {
    timerCountdown--;
    if (timerCountdown <= 0) {
      clearInterval(timerInterval);
      // Auto trigger modal after 2 minutes if user hasn't opened it yet
      if (!modalBackdrop.classList.contains('active')) {
        openModal();
      }
    }
  }, 1000);

  // 6. Handle Optional Sign-In Form Submission
  const signInForm = document.getElementById('signInForm');
  const signInSuccessMsg = document.getElementById('signInSuccessMsg');

  if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (signInSuccessMsg) {
        signInSuccessMsg.style.display = 'block';
        setTimeout(() => {
          closeModal();
          signInSuccessMsg.style.display = 'none';
        }, 1500);
      }
    });
  }

  // Initial Run
  renderBranchesGallery();
});
