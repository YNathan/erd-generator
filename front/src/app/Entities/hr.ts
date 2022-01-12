export interface PGConnectionOption {
    database: string;
    user: string;
    password: string;
    host: string;
}
export interface HRDocumentType {
    id: number | null;
    title: string | null;
    expires: boolean | null;
    exampleUrl: string | null;
    is_mandatory_by_default: boolean | null;
    is_shown_by_default: boolean | null;
    section_label: string | null;
    agency: number | null;
}

export interface HRSubsectionTemplate {
    id: number | null;
    document_type: number | null;
    hide_on_mobile: boolean | null;
    is_name_editable: boolean | null;
    is_question_editable: boolean | null;
    section_id: number | null;
    subsection_order: number | null;
    subsection_type: string | null;
    subtitle: string | null;
    title: string | null;
}

export interface HRSubsection {
    id: number | null;
    template_id: number | null;
    created_at: Date | null;
    agency: number | null;
    certification: string | null;
    section: number | null;
    name: string | null;
    order_num: number | null;
    is_name_editable: boolean | null;
    is_question_editable: boolean | null;
    settings: JSON | null;
    type: string | null;
    is_active: boolean | null;
}
