const ISO_DATE_TIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;

function isBlank(value: unknown): boolean {
  return typeof value !== "string" || value.trim() === "";
}

export function validateMedicationInput(body: any) {
  if (isBlank(body.patientName)) {
    return "O campo Nome do paciente é obrigatório";
  }

  if (isBlank(body.medicationName)) {
    return "O campo Nome do medicamento é obrigatório";
  }

  if (isBlank(body.dosage)) {
    return "O campo Dosagem é obrigatória";
  }

  if (isBlank(body.route)) {
    return "O campo Via de administração é obrigatória";
  }

  if (isBlank(body.scheduledAt) || !ISO_DATE_TIME.test(body.scheduledAt)) {
    return "O campo Data e horário são obrigatórios e deve estar no formato AAAA-MM-DD.";
  }

  return null;
}