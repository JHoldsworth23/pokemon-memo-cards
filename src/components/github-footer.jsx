export default function GitHubFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="github-section">
            <p>Copyright &copy; {currentYear} JHoldsworth23</p>
            <a href="https://github.com/Jholdsworth23" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
    )
}