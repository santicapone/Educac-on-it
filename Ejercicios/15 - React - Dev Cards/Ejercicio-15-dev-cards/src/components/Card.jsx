import React from "react";

export default function Card({ dev }) {
  if (!dev) return null;

  const badgeColor =
    dev.stack === "Frontend"
      ? "bg-info text-dark"
      : dev.stack === "Backend"
        ? "bg-warning text-dark"
        : dev.stack === "Fullstack"
          ? "bg-primary text-white"
          : "bg-secondary";

  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body d-flex flex-column align-items-center text-center">
        {/* Avatar sin comillas en el src */}
        <img
          src={dev.avatar}
          alt={dev.nombre}
          className="rounded-circle mb-3"
          width="100"
          height="100"
        />

        <h5 className="card-title fw-bold mb-1">{dev.nombre}</h5>
        <p className="text-muted small mb-2">{dev.rol}</p>

        <span className={`badge ${badgeColor} mb-3`}>{dev.stack}</span>

        {/* Estado de disponibilidad */}
        <div className="mb-3">
          {dev.disponible ? (
            <span className="badge bg-success-subtle text-success border border-success">
              <i className="fa-solid fa-circle me-1 small"></i> Disponible
            </span>
          ) : (
            <span className="badge bg-danger-subtle text-danger border border-danger">
              <i className="fa-solid fa-circle me-1 small"></i> No disponible
            </span>
          )}
        </div>

        {/* Skills */}
        {dev.skills && dev.skills.length > 0 && (
          <div className="mb-3 w-100">
            <p className="fw-semibold small mb-1 text-secondary">Skills:</p>
            <div className="d-flex flex-wrap justify-content-center gap-1">
              {dev.skills.map((skill, index) => (
                <span key={index} className="badge bg-light text-dark border">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* GitHub */}
        {dev.github && (
          <div className="mt-auto pt-2">
            <a
              href={dev.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark fs-4"
              title="Perfil de GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
