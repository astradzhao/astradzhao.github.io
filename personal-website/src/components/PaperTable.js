import React, { useEffect, useState } from 'react';
import './PaperTable.css';

function PaperTable() {
  const [papers, setPapers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/files/papers.json`)
      .then(response => response.json())
      .then(data => setPapers(data))
      .catch(err => console.error('Failed to load papers:', err));
  }, []);

  const filteredPapers = papers
    .sort((a, b) => {
      // Sort by date first
      const dateComparison = new Date(b.date_added) - new Date(a.date_added);
      // If dates are equal, sort by title
      if (dateComparison === 0) {
        return a.title.localeCompare(b.title);
      }
      return dateComparison;
    })
    .filter(paper =>
      paper.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="paper-table-container">
      <h2>Research Paper Notes</h2>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <table className="paper-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>ARXIV</th>
            <th>Notes</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          {filteredPapers.map((paper, index) => (
            <tr key={index}>
              <td>{paper.title}</td>
              <td>
                <a href={paper.pdf_url} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </td>
              <td>
                <a href={paper.notes_url} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </td>
              <td>{new Date(paper.date_added).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaperTable;