const STORAGE_KEY = "BOOKSHELF_APP";
let books = [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookForm");
  const searchForm = document.getElementById("searchBookForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addBook();
  });

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    renderBooks();
  });

  loadData();
  renderBooks();
});

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

function loadData() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) books = JSON.parse(data);
}

function generateId() {
  return new Date().getTime();
}

function addBook() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const year = Number(document.getElementById("year").value);
  const isComplete = document.getElementById("isComplete").checked;

  if (!title || !author || !year) return alert("Semua kolom harus diisi!");

  const newBook = {
    id: generateId(),
    title,
    author,
    year,
    isComplete,
  };

  books.push(newBook);
  saveData();
  renderBooks();
  document.getElementById("bookForm").reset();
}

function makeBookElement(book) {
  const container = document.createElement("div");
  container.setAttribute("data-bookid", book.id);
  container.setAttribute("data-testid", "bookItem");

  const title = document.createElement("h3");
  title.textContent = book.title;
  title.setAttribute("data-testid", "bookItemTitle");

  const author = document.createElement("p");
  author.textContent = `Penulis: ${book.author}`;
  author.setAttribute("data-testid", "bookItemAuthor");

  const year = document.createElement("p");
  year.textContent = `Tahun: ${book.year}`;
  year.setAttribute("data-testid", "bookItemYear");

  const btnToggle = document.createElement("button");
  btnToggle.textContent = book.isComplete ? "Belum Selesai Dibaca" : "Selesai Dibaca";
  btnToggle.setAttribute("data-testid", "bookItemIsCompleteButton");
  btnToggle.addEventListener("click", () => toggleBookStatus(book.id));

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Hapus Buku";
  btnDelete.setAttribute("data-testid", "bookItemDeleteButton");
  btnDelete.addEventListener("click", () => deleteBook(book.id));

  const actions = document.createElement("div");
  actions.append(btnToggle, btnDelete);

  container.append(title, author, year, actions);
  return container;
}

function renderBooks() {
  const incomplete = document.getElementById("incompleteBookshelfList");
  const complete = document.getElementById("completeBookshelfList");
  const query = document.getElementById("searchBookTitle").value.toLowerCase();

  incomplete.innerHTML = "<h2>📖 Belum Selesai Dibaca</h2>";
  complete.innerHTML = "<h2>✅ Selesai Dibaca</h2>";

  for (const book of books) {
    if (book.title.toLowerCase().includes(query)) {
      const element = makeBookElement(book);
      if (book.isComplete) complete.append(element);
      else incomplete.append(element);
    }
  }
}

function toggleBookStatus(id) {
  const book = books.find((b) => b.id === id);
  if (!book) return;
  book.isComplete = !book.isComplete;
  saveData();
  renderBooks();
}

function deleteBook(id) {
  if (!confirm("Apakah Anda yakin ingin menghapus buku ini?")) return;
  books = books.filter((b) => b.id !== id);
  saveData();
  renderBooks();
}
