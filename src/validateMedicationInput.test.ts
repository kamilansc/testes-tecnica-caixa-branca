import { test, expect } from "vitest"
import { validateMedicationInput } from "./validateMedicationInput";

test("CT01 - rejeita paciente em branco", () => {
    const input = {
        patientName: "",
        medicationName: "Dipirona",
        dosage: "500mg",
        route: "oral",
        scheduledAt: "2026-09-03T10:00"
    };

    const result = validateMedicationInput(input);

    expect(result).toBe("O campo Nome do paciente é obrigatório");
});

test("CT02 - rejeita medicamento em branco", () => {
    const input = {
        patientName: "Jorge",
        medicationName: "",
        dosage: "500mg",
        route: "oral",
        scheduledAt: "2026-09-03T10:00"
    };

    const result = validateMedicationInput(input);

    expect(result).toBe("O campo Nome do medicamento é obrigatório");
});

test("CT03 - rejeita dosagem em branco", () => {
    const input = {
        patientName: "Jorge",
        medicationName: "Dipirona",
        dosage: "",
        route: "oral",
        scheduledAt: "2026-09-03T10:00"
    };

    const result = validateMedicationInput(input);

    expect(result).toBe("O campo Dosagem é obrigatória");
});

test("CT04 - rejeita via de administração em branco", () => {
    const input = {
        patientName: "Jorge",
        medicationName: "Dipirona",
        dosage: "500mg",
        route: "",
        scheduledAt: "2026-09-03T10:00"
    };

    const result = validateMedicationInput(input);

    expect(result).toBe("O campo Via de administração é obrigatória");
});

test("CT05 - rejeita data/hora em branco", () => {
    const input = {
        patientName: "Jorge",
        medicationName: "Dipirona",
        dosage: "500mg",
        route: "Oral",
        scheduledAt: ""
    };

    const result = validateMedicationInput(input);

    expect(result).toBe("O campo Data e horário são obrigatórios e deve estar no formato AAAA-MM-DD.");
});

test("CT06 - rejeita formato de data inválido", () => {
    const input = {
        patientName: "Jorge",
        medicationName: "Dipirona",
        dosage: "500mg",
        route: "Oral",
        scheduledAt: "2026-09-03T:00"
    };

    const result = validateMedicationInput(input);

    expect(result).toBe("O campo Data e horário são obrigatórios e deve estar no formato AAAA-MM-DD.");
});

test("CT07 - valida corretamente todos os campos", () => {
    const input = {
        patientName: "Jorge",
        medicationName: "Dipirona",
        dosage: "500mg",
        route: "Oral",
        scheduledAt: "2026-09-03T10:00" 
    };

    const result = validateMedicationInput(input);

    expect(result).toBe(null);
});