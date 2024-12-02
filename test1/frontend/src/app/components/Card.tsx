export default function Card({ title, content }: { title: string; content: string }) {
    return (
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.cardContent}>{content}</p>
      </div>
    );
  }
  
  const styles = {
    card: {
      backgroundColor: "#ffffff",
      padding: "20px",
      marginBottom: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    cardContent: {
      fontSize: "16px",
      color: "#555",
    },
  };
  