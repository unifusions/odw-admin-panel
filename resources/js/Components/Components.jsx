// LAYOUT ROWS

export const Row = ({ className, children }) => {
    return (
        <div className={`grid grid-cols-${className}`}>
            {children}
        </div>
    )
}

export const Column = ({ xs, sm, md, lg, className = '', children }) => {
    const fallback = xs ?? sm ?? md ?? lg;

    const finalXs = xs ?? (sm || md || lg ? 12 : undefined);
    const finalSm = sm ?? xs ?? (md || lg ? fallback : undefined);
    const finalMd = md ?? sm ?? xs ?? (lg ? fallback : undefined);
    const finalLg = lg ?? md ?? sm ?? xs ?? fallback;

    // Build responsive class list
    const responsiveClasses = [
        finalXs !== undefined ? `col-xs-${finalXs}` : '',
        finalSm !== undefined ? `col-sm-${finalSm}` : '',
        finalMd !== undefined ? `col-md-${finalMd}` : '',
        finalLg !== undefined ? `col-lg-${finalLg}` : ''
    ]
        .filter(Boolean)
        .join(' ');

    const combinedClassName = `${responsiveClasses} ${className}`.trim();
    return (
        <div className={combinedClassName} >
            {children}
        </div>
    )
}

// DISPLAY FLEX

export const DisplayFlex = ({ className = '', children }) => {
    return (
        <div className={`d-flex align-items-center ` + className}>
            {children}
        </div>
    );
}

// PAGE TITLE

export const PageHeaderTitle = ({ title }) => {
    return (<h1 className="page-header-title">{title}</h1>)
}

// ATTACHMENT VIEW

export const AttachmentView = ({ attachment }) => {
    return (
        <a href={attachment.temporary_url} target="_blank">
            <div className="d-flex badge text-bg-secondary">
                <i class="bi bi-paperclip"></i> {attachment.file_name}
            </div>
        </a>
    )
}