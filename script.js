// BCA AI-1 Student Database with Complete Information and Roll Numbers
const studentDatabase = [
    {
        name: "Ayush Kumar",
        rollNumber: "261000370070",
        enrollmentNumber: "2301234001",
        fatherName: "Mr. Rajesh Kumar",
        contact: "9876543210",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%23667eea' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3EAK%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Priya Singh",
        rollNumber: "261000370071",
        enrollmentNumber: "2301234002",
        fatherName: "Mr. Suresh Singh",
        contact: "9876543211",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%23764ba2' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3EPS%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Raj Kumar",
        rollNumber: "261000370072",
        enrollmentNumber: "2301234003",
        fatherName: "Mr. Vijay Kumar",
        contact: "9876543212",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%232ecc71' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3ERK%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Neha Verma",
        rollNumber: "261000370073",
        enrollmentNumber: "2301234004",
        fatherName: "Mr. Arun Verma",
        contact: "9876543213",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%23e74c3c' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3ENV%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Vikram Patel",
        rollNumber: "261000370074",
        enrollmentNumber: "2301234005",
        fatherName: "Mr. Rakesh Patel",
        contact: "9876543214",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%239b59b6' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3EVP%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Pooja Sharma",
        rollNumber: "261000370075",
        enrollmentNumber: "2301234006",
        fatherName: "Mr. Mahesh Sharma",
        contact: "9876543215",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%23f39c12' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3EPS%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Arjun Desai",
        rollNumber: "261000370076",
        enrollmentNumber: "2301234007",
        fatherName: "Mr. Sunil Desai",
        contact: "9876543216",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%231abc9c' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3EAD%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Divya Nair",
        rollNumber: "261000370077",
        enrollmentNumber: "2301234008",
        fatherName: "Mr. Mohan Nair",
        contact: "9876543217",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%233498db' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3EDN%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Isha Prabhu",
        rollNumber: "261000370078",
        enrollmentNumber: "2301234009",
        fatherName: "Mr. Kumar Prabhu",
        contact: "9876543218",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%23e67e22' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3EIP%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Rohan Gupta",
        rollNumber: "261000370079",
        enrollmentNumber: "2301234010",
        fatherName: "Mr. Rajesh Gupta",
        contact: "9876543219",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%2334495e' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3ERG%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Anjali Mishra",
        rollNumber: "261000370080",
        enrollmentNumber: "2301234011",
        fatherName: "Mr. Ashok Mishra",
        contact: "9876543220",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%23c0392b' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3EAM%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Saurav Jain",
        rollNumber: "261000370081",
        enrollmentNumber: "2301234012",
        fatherName: "Mr. Ramesh Jain",
        contact: "9876543221",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%238e44ad' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3ESJ%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Ritika Devi",
        rollNumber: "261000370082",
        enrollmentNumber: "2301234013",
        fatherName: "Mr. Ravi Devi",
        contact: "9876543222",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%2316a085' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3ERD%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Harshit Yadav",
        rollNumber: "261000370083",
        enrollmentNumber: "2301234014",
        fatherName: "Mr. Vinod Yadav",
        contact: "9876543223",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%232980b9' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3EHY%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Megha Chaurasia",
        rollNumber: "261000370084",
        enrollmentNumber: "2301234015",
        fatherName: "Mr. Anil Chaurasia",
        contact: "9876543224",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%23d35400' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3EMC%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Nikhil Sharma",
        rollNumber: "261000370085",
        enrollmentNumber: "2301234016",
        fatherName: "Mr. Pankaj Sharma",
        contact: "9876543225",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%232c3e50' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3ENS%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Sakshi Patel",
        rollNumber: "261000370086",
        enrollmentNumber: "2301234017",
        fatherName: "Mr. Deepak Patel",
        contact: "9876543226",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%2327ae60' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3ESP%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Tushar Malhotra",
        rollNumber: "261000370087",
        enrollmentNumber: "2301234018",
        fatherName: "Mr. Manish Malhotra",
        contact: "9876543227",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%23c0392b' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3ETM%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Vedika Singh",
        rollNumber: "261000370088",
        enrollmentNumber: "2301234019",
        fatherName: "Mr. Arjun Singh",
        contact: "9876543228",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%2316a085' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3EVS%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Krish Reddy",
        rollNumber: "261000370089",
        enrollmentNumber: "2301234020",
        fatherName: "Mr. Naresh Reddy",
        contact: "9876543229",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%232980b9' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3EKR%3C/text%3E%3C/svg%3E"
    },
    {
        name: "Gauri Deshmukh",
        rollNumber: "261000370090",
        enrollmentNumber: "2301234021",
        fatherName: "Mr. Sanjay Deshmukh",
        contact: "9876543230",
        batch: "BCA AI-1",
        department: "Bachelor of Computer Applications",
        status: "Active",
        photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect fill='%23e74c3c' width='150' height='150'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3EGD%3C/text%3E%3C/svg%3E"
    }
];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    const searchInput = document.getElementById('studentInput');
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchResult();
        }
    });
}

// Search Function
function searchResult() {
    const searchInput = document.getElementById('studentInput').value.trim().toLowerCase();
    
    if (searchInput === '') {
        showNoResult('⚠️ Please enter a student name or roll number.');
        return;
    }

    // Search for student
    const student = studentDatabase.find(s => 
        s.name.toLowerCase().includes(searchInput) || 
        s.rollNumber.toLowerCase().includes(searchInput) ||
        s.enrollmentNumber.toLowerCase().includes(searchInput)
    );

    if (student) {
        openProfile(student);
    } else {
        showNoResult('❌ No results found. Please check the name or roll number.');
    }
}

// Show No Result Message
function showNoResult(message) {
    const resultContainer = document.getElementById('resultContainer');
    const noResultMsg = document.getElementById('noResultMsg');

    resultContainer.classList.add('hidden');
    noResultMsg.classList.remove('hidden');
    noResultMsg.querySelector('p').textContent = message;
}

// Open Student Profile Modal
function openProfile(student) {
    document.getElementById('profilePhoto').src = student.photo;
    document.getElementById('profileName').textContent = student.name;
    document.getElementById('profileRoll').textContent = student.rollNumber;
    document.getElementById('profileEnrollment').textContent = student.enrollmentNumber;
    document.getElementById('profileFatherName').textContent = student.fatherName;
    document.getElementById('profileContact').textContent = student.contact;
    document.getElementById('profileBatch').textContent = student.batch;
    document.getElementById('profileDept').textContent = student.department;
    document.getElementById('profileStatus').textContent = student.status;
    
    document.getElementById('profileModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close Profile Modal
function closeProfile() {
    document.getElementById('profileModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
    document.getElementById('studentInput').value = '';
    document.getElementById('studentInput').focus();
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProfile();
    }
});

// Load PDF Data Function (placeholder)
function loadPDFData() {
    let studentList = studentDatabase.map(s => `${s.name} - ${s.rollNumber}`).join('\n');
    alert('✅ Total ' + studentDatabase.length + ' Students Loaded!\n\nEnter any student\'s Roll Number or Name to view profile.\n\nExample Roll Numbers:\n261000370070 - 261000370090\n\n' + studentList.substring(0, 200) + '...');
}


