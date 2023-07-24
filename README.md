# Protecting Elections Toolkit

## Development

This page was originally planned to fit in the body of a "Basic page" on the IDEA website, which can contain HTML code. For this reason, it was kept as simple as possible. I.e., a single static HTML page, as little javascript as possible, and styled to match the rest of IDEA's website. (The page directly imports a CSS file from IDEA.)

The number of columns made the table too wide to embed, so it was suggested that the toolkit be put on a separate page. It should be straightforward for a website administrator to upload these files directly. However, idea.int is undergoing a remodel while this toolkit is being created, so the files were stored here for now.

### Github

Github is convenient for two reasons:

1. Github Pages is a quick and free way to put the toolkit online for now
2. It makes all files easy to find, so it will be very straightforward to move the toolkit to IDEA's website later

## Management

### Adding resources

Here is an example of a table item:

    <tr>
        <td class="title" style="width:50%;"><a
            href="https://www.kofiannanfoundation.org/electoral-integrity/justice-electoral-integrity-initiative/"
            target="_blank">
             Access to Justice and Electoral Integrity <i
            class="fa fa-external-link"></i></a></td>
        <td class="author">Kofi Annan Foundation</td>
        <td class="challenge">Autocratization</td>
        <td class="type">Knowledge</td>
        <td class="prevention">&#9989;</td>
        <td class="resilience">&#10060;</td>
        <td class="recovery">&#10060;</td>
        <td class="gender">&#10060;</td>
        <td class="legal">&#9989;</td>
        <td class="institutional">&#10060;</td>
        <td class="management">&#10060;</td>
    </tr>

The categories of prevention, resilience, recovery, gender, legal, institutional, and management are all "yes/no" columns, and use icons to indicate their value. `&#9989;` shows a green checkmark (&#9989;), and `&#10060;` shows a red x (&#10060;)

### Excel Formula

    ="<tr>
        <td class='title' style='width:50' ;'><a href='"&L2&"' target='_blank'>"&B2&"<i class='fa fa-external link'></i></a>
        </td>
        <td class='author'>"&C2&"</td>
        <td class='challenge'>"&C2&"</td>
        <td class='type'>"&E2&"</td>
        <td class='prevention'>"&IF(E2="Yes","✅","❌")&"</td>
        <td class='resilience'>"&IF(F2="Yes","✅","❌")&"</td>
        <td class='recovery'>"&IF(G2="Yes","✅","❌")&"</td>
        <td class='gender'>"&IF(H2="Yes","✅","❌")&"</td>
        <td class='legal'>"&IF(E2="Yes","✅","❌")&"</td>
        <td class='institutional'>"&IF(E2="Yes","✅","❌")&"</td>
        <td class='management'>"&IF(E2="Yes","✅","❌")&"</td></tr>"

## Editing introductory text

Introductory text appears towards the top of the index.html file. Text can be edited directly.

New paragraphs can be added by adding text between an opening and closing paragraph tag: `<p>` and `</p>`.

Links take the format `<a href="https://www.idea.int/our-work/what-we-do/elections" target="_blank">Protecting Elections</a>`. `https://www.idea.int/our-work/what-we-do/elections` is the url and `Protecting Elections` is the clickable text. If `target="_blank"` is included, the link will open in a new tab.
